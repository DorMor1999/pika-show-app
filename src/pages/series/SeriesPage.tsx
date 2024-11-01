import React from 'react';
import Begin from '../../shared/components/MoviesAndSeries/Begin';
import { options } from '../../shared/util/options';

const SeriesPage: React.FC = () => {
  const url: string =
    'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';

  return <Begin url={url} title={'Series'} options={options} />;
};

export default SeriesPage;
