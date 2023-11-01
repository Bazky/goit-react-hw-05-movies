import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from 'api/themoviedb';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&page=1`
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
