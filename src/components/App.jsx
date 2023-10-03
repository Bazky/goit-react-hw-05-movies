import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { Movies } from '../components/Movies/Movies';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';
import { Cast } from '../components/Cast/Cast';
import { Reviews } from '../components/Reviews/Reviews';

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetails />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId/cast"
            element={<Cast />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId/reviews"
            element={<Reviews />}
          />
        </Routes>
      </div>
    </Router>
  );
};
