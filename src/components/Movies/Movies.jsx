import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';

  //   fetch fetch fetch
  const searchMovies = async query => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&include_adult=false&language=en-US&page=1`
      );
      setSearchResults(response.data.results);
      window.history.replaceState(null, '', `/movies?query=${searchQuery}`);
    } catch (error) {
      console.error('Błąd podczas wyszukiwania filmów:', error);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
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
      <button
        onClick={() => {
          searchMovies();
          clearSearch();
        }}
      >
        Szukaj
      </button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
