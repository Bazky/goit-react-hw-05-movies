import React, { useState } from 'react';
import axios from 'axios';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';

  const searchMovies = async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Błąd podczas wyszukiwania filmów:', error);
    }
  };
  return (
    <div>
      <h1>Wyszukaj filmy</h1>
      <input
        type="text"
        placeholder="Wpisz słowo kluczowe"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={searchMovies}>Szukaj</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
