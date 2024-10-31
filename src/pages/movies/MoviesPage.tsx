import React from 'react';

import Begin from '../../shared/components/MoviesAndSeries/Begin';

const MoviesPage: React.FC = () => {
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTZkZmJjM2NmNDYyNTk0ZDE4OWYyZGZmNTI4YmE4ZCIsIm5iZiI6MTczMDM4MTA2Mi4xNjc1MjM0LCJzdWIiOiI2NGQwZmVjMDg1MDkwZjAxMjViZDk4MDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pnG3jK5c7r-bdEimG0sth73XJEYJeYy6prNfoAEigok'
    }
  };

  const url:string= 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'; 
  
  return (
    <Begin url={url} title={'Movies'} options={options}/>
  );
};

export default MoviesPage;
