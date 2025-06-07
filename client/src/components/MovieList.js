import React from 'react';
import { useNavigate } from 'react-router-dom';
import './movieList.scss';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  if (!movies || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className='list-container'>
      {movies.map(movie => (
        <div
          key={movie.id}
          style={{ width: 200, border: '1px solid #ccc', borderRadius: 8, padding: 8, cursor: 'pointer' }}
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          )}
          <h3 >{movie.title}</h3>
          <p >{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
