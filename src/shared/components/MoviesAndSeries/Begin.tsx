import React, { useEffect, useState, Fragment } from 'react';
import Wrapper from '../UI/Wrapper/Wrapper';
import { Movie, Series, SortTypeOBJ } from '../../util/types';
import CardList from './CardList';
import { MyError } from '../../util/MyError';
import Error from '../UI/Error/Error';
import MySpinner from '../UI/MySpinner/MySpinner';
import { sortByTitle } from '../../util/sorts';
import SortDropDown from '../SortDropDown/SortDropDown';

type propsPage = {
  url: string;
  title: string;
  options: {
    method: string;
    headers: {
      accept: string;
      Authorization: string;
    };
  };
};

const Begin: React.FC<propsPage> = ({ url, title, options }) => {
  const [dataItems, setDataItems] = useState<Movie[] | Series[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<MyError | null>(null);
  const [sortType, setSortType] = useState<SortTypeOBJ>({
    sortType: 'By Title (Ascending)',
    ascending: true,
    sortFunction: sortByTitle
  });


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new MyError(`Failed to fetch ${title}!`, response.status);
        }
        const data = await response.json();
        console.log('data.results', data.results);
        const newList: Movie[] | Series[] = data.results.map(
          (curItem: any) => ({
            title: title === 'Movies' ? curItem.title : curItem.name,
            overview: curItem.overview,
            language: curItem.original_language,
            releaseDate:
              title === 'Movies'
                ? curItem.release_date
                : curItem.first_air_date,
            posterPath: curItem.backdrop_path,
            voteAverage: curItem.vote_average,
            id: curItem.id,
            isAdult: curItem.adult,
          })
        );
        setDataItems(newList);
      } catch (error) {
        if (error instanceof MyError) {
          setError(error);
        } else {
          const defError: MyError = new MyError(
            `Failed to fetch ${title}`,
            500
          );
          setError(defError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);


  const handleDataFromChild = (dataFromChild: SortTypeOBJ):void => {
    setSortType(dataFromChild);
  };

  const sortedItems = sortType.sortFunction([...dataItems], sortType.ascending);


  let pageContent;
  if (error) {
    pageContent = <Error error={error} />;
  } else {
    pageContent = (
      <Fragment>
        <h1>{title}</h1>
        <SortDropDown fatherState={sortType} onDataSend={handleDataFromChild} />
        <br/>
        <CardList title={title} dataList={sortedItems} />
      </Fragment>
    );
  }

  let spinnerContent;
  if (isLoading) {
    spinnerContent = <MySpinner />;
  } else {
    spinnerContent = undefined;
  }

  return (
    <Wrapper>
      {spinnerContent}
      {pageContent}
    </Wrapper>
  );
};

export default Begin;
