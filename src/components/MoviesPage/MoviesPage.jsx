import { useState, useEffect } from 'react';
import movieAPI from '../../services/movieAPI';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';
import { Link, useRouteMatch, Route, useLocation } from 'react-router-dom';
import SearchBar from '../Searchbar/Searchbar';
const MoviesPage = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();

  const handleFormSubmit = name => {
    setName(name);
    setMovies([]);
  };

  useEffect(() => {
    movieAPI.fetchSearchMovie(name).then(movies => setMovies(movies.results));
  }, [name]);
  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>
    </>
  );
};

export default MoviesPage;
