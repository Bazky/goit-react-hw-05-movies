import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';

  //   fetch fetch fetch
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`
      )
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error(
          'Błąd podczas pobierania danych o zespole aktorskim:',
          error
        );
      });
  }, [movieId]);

  return (
    <div>
      <h2>Zespół aktorski:</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <div>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <p>Brak zdjęcia</p>
              )}
              <p>{actor.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
