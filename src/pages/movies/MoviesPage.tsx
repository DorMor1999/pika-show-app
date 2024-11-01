import React from 'react';

import Begin from '../../shared/components/MoviesAndSeries/Begin';
import { options } from '../../shared/util/options';

const MoviesPage: React.FC = () => {
  const url: string =
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

  return <Begin url={url} title={'Movies'} options={options} />;
};

export default MoviesPage;
