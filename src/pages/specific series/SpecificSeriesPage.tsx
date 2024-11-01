import React from 'react';
import Beginspecific from '../../shared/components/MovieAndSeires/Beginspecific';
import { options } from '../../shared/util/options';

const SpecificSeriesPage: React.FC = () => {
  const url: string = `https://api.themoviedb.org/3/tv/[id]`;

  return <Beginspecific url={url} options={options} title="Series" />;
};

export default SpecificSeriesPage;
