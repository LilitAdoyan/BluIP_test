import React, { useState, useEffect } from 'react';
import { searchMovies, discoverMovies } from '../api/movies';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import './home.scss';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    // Only fetch discover movies if we're not searching
    if (!isSearching) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          setError(null);
          const data = await discoverMovies(page);
          setMovies(data.results || []);
          setTotalPages(data.total_pages || 1);
        } catch (err) {
          console.error('Error fetching movies:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }
  }, [page, isSearching]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setIsSearching(true);
    
    try {
      const data = await searchMovies(query);
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message || 'Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClearSearch = () => {
    setQuery('');
    setIsSearching(false);
    setPage(1); // Reset to first page
  };

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-container">
      <h1>Movie Explorer</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        isSearching={isSearching}
      />
      {!loading && !error && (
        <>
          <MovieList movies={movies} />
          {!isSearching && (
            <div className="button-container">
              <button onClick={handlePrev} disabled={page === 1} className="button">
                Previous
              </button>
              <button onClick={handleNext} disabled={page === totalPages} className="button">
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
