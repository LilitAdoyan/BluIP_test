import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../api/movies";
import "./movieDetails.scss";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="detail-wrapper">
      <button onClick={() => navigate(-1)} className="button back">
        ← Back
      </button>

      <div className="details-container">
        {movie.poster_path && (
          <div className="img-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        )}

        <div className="content-wrapper">
          <h1>{movie.title}</h1>

          <div className="info-wrapper">
            <span className="info">{movie.release_date?.split("-")[0]}</span>
            <span className="info">{movie.runtime} min</span>
            {movie.genres?.map((genre) => (
              <span key={genre.id} className="info">
                {genre.name}
              </span>
            ))}
          </div>

          <h2>
            Overview
          </h2>
          <p >
            {movie.overview}
          </p>

          {movie.vote_average && (
            <div className="rating-wrapper">
              <h2 >
                Rating
              </h2>
              <div>
                {movie.vote_average.toFixed(1)} / 10
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
