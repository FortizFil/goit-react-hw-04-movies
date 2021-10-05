const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '31143f93c8cd4338a46f4d01b3c629e1';

const fetchPopularMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    },
  );
};

const fetchMovieById = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(
    response => {
      return response.json();
    },
  );
};

const fetchMovieCasts = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    return response.json();
  });
};

const fetchMovieRewiews = movieId => {
  return fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    return response.json();
  });
};

const fetchSearchMovie = name => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&&language=en-US&query=${name}&page=1&include_adult=false`,
  ).then(response => {
    return response.json();
  });
};

const api = {
  fetchPopularMovies,
  fetchMovieById,
  fetchMovieCasts,
  fetchMovieRewiews,
  fetchSearchMovie,
};

export default api;
