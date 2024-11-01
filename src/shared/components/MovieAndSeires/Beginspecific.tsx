import React, { Fragment, useEffect, useState } from 'react';
import { Movie, Series } from '../../util/types';
import { MyError } from '../../util/MyError';
import { useParams } from 'react-router-dom';
import Error from '../UI/Error/Error';
import Wrapper from '../UI/Wrapper/Wrapper';
import MySpinner from '../UI/MySpinner/MySpinner';
import ItemCard from './ItemCard';
import classes from './Beginspecific.module.css';

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

const Beginspecific: React.FC<propsPage> = ({ url, title, options }) => {
  const [dataItem, setDataItem] = useState<Movie | Series | null >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<MyError | null>(null);
  const { itemId } = useParams<string>();


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {

        const response = await fetch(url.replace('[id]', `${itemId}`), options);
        if (!response.ok) {
          throw new MyError(`Failed to fetch ${title}!`, response.status);
        }
        const data = await response.json();
        const newItem: Movie | Series = {
            title: title === 'Movie' ? data.title : data.name,
            overview: data.overview,
            language: data.original_language,
            releaseDate:
              title === 'Movie'
                ? data.release_date
                : data.first_air_date,
            posterPath: data.backdrop_path,
            voteAverage: data.vote_average,
            id: data.id,
            isAdult: data.adult,
        };
        console.log('newItem', newItem);
       
        setDataItem(newItem);
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


  let pageContent;
  if (error) {
    pageContent = <Error error={error} />;
  } else {
    pageContent = (
      <Fragment>
        <h1 className={classes['title-h1']}>{title}</h1>
        <br/>

        {dataItem ? <ItemCard title={title} item={dataItem}/>: null}
      </Fragment>
    );
  }


  let spinnerContent;
  if (isLoading) {
    spinnerContent = <MySpinner />;
  } else {
    spinnerContent = undefined;
  }

  return (<Wrapper>
    {spinnerContent}
    {pageContent}
  </Wrapper>);
};

export default Beginspecific;
