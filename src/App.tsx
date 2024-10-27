//depencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//pages
import HomePage from './pages/home/HomePage';
import MoviesPage from './pages/movies/MoviesPage';
import MoviePage from './pages/movie/MoviePage';
import SeriesPage from './pages/series/SeriesPage';
import SpecificSeriesPage from './pages/specific series/SpecificSeriesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/TV_series" element={<SeriesPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
        <Route path="/TV_series/:seriesId" element={<SpecificSeriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
