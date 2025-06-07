export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/movies/search?query=${encodeURIComponent(query)}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.details || data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};

export const discoverMovies = async (page = 1) => {
  const response = await fetch(`http://localhost:5000/api/discover/movie?page=${page}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`http://localhost:5000/api/movie/${movieId}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.details || data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};


