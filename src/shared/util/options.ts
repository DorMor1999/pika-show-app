export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `${process.env.TMDB_API_KEY}`,
  },
};
