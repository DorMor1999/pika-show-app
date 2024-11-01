import React from 'react';
import Beginspecific from '../../shared/components/MovieAndSeires/Beginspecific';
import { options } from '../../shared/util/options';

const MoviePage: React.FC = () => {
  const url: string = `https://api.themoviedb.org/3/movie/[id]`;

  return <Beginspecific url={url} options={options} title="Movie" />;
};

export default MoviePage;
