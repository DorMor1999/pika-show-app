//depencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//pages
import HomePage from './pages/home/HomePage';
import MoviesPage from './pages/movies/MoviesPage';
import MoviePage from './pages/movie/MoviePage';
import SeriesPage from './pages/series/SeriesPage';
import SpecificSeriesPage from './pages/specific series/SpecificSeriesPage';
import NavBar from './shared/components/NavBar/NavBar';
import { ThemeContextProvider } from './shared/context/ThemeContext';

function App() {
  
  return (
    <Router>
      <ThemeContextProvider>
        <NavBar /> {/* Navigation bar will show on every page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/movies/:itemId" element={<MoviePage />} />
          <Route path="/series/:itemId" element={<SpecificSeriesPage />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  );
}

export default App;
