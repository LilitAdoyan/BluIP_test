import React from 'react';
import './search-bar.scss';

const SearchBar = ({ query, setQuery, handleSearch, handleClearSearch, isSearching }) => {
  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      {isSearching && (
        <button 
          type="button" 
          onClick={handleClearSearch}
          className="search-button"
        >
          Clear Search
        </button>
      )}
    </form>
  );
};

export default SearchBar;
