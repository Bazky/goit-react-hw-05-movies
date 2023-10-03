import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import { Cast } from '../Cast/Cast'; // Import komponentu Cast
import { Reviews } from '../Reviews/Reviews'; // Import komponentu Reviews

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
      )
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych o filmie:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />

      <nav>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Zespół aktorski</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Recenzje</Link>
          </li>
        </ul>
      </nav>

      {/* Dodaj trasy dla komponentów Cast i Reviews */}
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
