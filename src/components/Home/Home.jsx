import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`
      )
      .then(response => {
        setTrendingMovies(response.data.results);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania danych:', error);
      });
  }, []);

  return (
    <div>
      <h1>Najpopularniejsze filmy dzisiaj</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
