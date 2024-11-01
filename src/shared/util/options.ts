export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
