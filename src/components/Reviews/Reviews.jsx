import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Movies() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const apiKey = '718f2a56dca2d55e08ad2e8b7789586d';

  //   fetch fetch fetch
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`
      )
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Błąd podczas pobierania recenzji:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Recenzje:</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
