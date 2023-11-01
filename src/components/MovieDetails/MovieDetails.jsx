import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import css from './MovieDetails.module.css';
import { apiKey } from 'api/themoviedb';
import { PropTypes } from 'prop-types';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych o filmie:', error);
      });
  }, [movieId]);

  // stała sprawdza czy poster_path jest zdefiniowane
  const posterPath = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`
    : '';

  return (
    <div>
      <button className={css.button} onClick={() => navigate(-1)}>
        Cofnij
      </button>
      <div className={css.container}>
        {posterPath && <img src={posterPath} alt={movieDetails.title} />}
        {/* info info info */} {/* info info info */}
        <div className={css.info}>
          <div className={css.info__title}>
            <h1>{movieDetails.title}</h1>
            <p>
              {movieDetails.release_date &&
                `(${movieDetails.release_date.split('-')[0]})`}
            </p>
          </div>
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
        </div>
        {/* info info info */} {/* info info info */}
      </div>
      <div>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Zespół aktorski</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Recenzje</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string,
  posterPath: PropTypes.string,
  navigate: PropTypes.func,
  movieDetails: PropTypes.object,
};
