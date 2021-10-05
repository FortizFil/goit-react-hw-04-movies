import { useState, useEffect } from 'react';
import { Link, useRouteMatch, Route, useLocation } from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import MovieDetailsPage from '../MovieDetailsPage/MovieDetailsPage';

const HomePage = () => {
  const { url } = useRouteMatch();
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    movieAPI
      .fetchPopularMovies()
      .then(movies => setPopularMovies(movies.results));
  }, []);

  return (
    <>
      <ul>
        {popularMovies.map(popularMovie => (
          <li key={popularMovie.id}>
            <Link
              to={{
                pathname: `${url}movies/${popularMovie.id}`,
                state: { from: location },
              }}
            >
              {popularMovie.original_title}
            </Link>
          </li>
        ))}
      </ul>
      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>
    </>
  );
};

export default HomePage;
