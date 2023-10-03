import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';
  const navigate = useNavigate();

  //   fetch fetch fetch
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

  // stała sprawdza czy poster_path jest zdefiniowane
  const posterPath = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : '';

  return (
    <div>
      <button onClick={() => navigate(-1)}>Cofnij</button>
      <div className={css.container}>
        {posterPath && <img src={posterPath} alt={movieDetails.title} />}
        {/* info info info */} {/* info info info */}
        <h1>{movieDetails.title}</h1>
        <p>
          {movieDetails.release_date &&
            `Rok: ${movieDetails.release_date.split('-')[0]}`}
        </p>
        <p>
          {movieDetails.vote_average &&
            `Ocena użytkowników: ${movieDetails.vote_average}`}
        </p>
        <p>{movieDetails.overview && `Opis: ${movieDetails.overview}`}</p>
        <p>
          {movieDetails.genres &&
            `Gatunek: ${movieDetails.genres
              .map(genre => genre.name)
              .join(', ')}`}
        </p>
        {/* info info info */} {/* info info info */}
      </div>
      {/* nav nav nav */} {/* nav nav nav */}
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
      {/* nav nav nav */} {/* nav nav nav */}
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <Outlet />
    </div>
  );
}
