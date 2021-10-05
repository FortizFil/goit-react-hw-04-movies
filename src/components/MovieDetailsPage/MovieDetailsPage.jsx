import s from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';

import {
  useParams,
  Switch,
  Route,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from 'react-router-dom';
import movieAPI from '../../services/movieAPI';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState([]);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    movieAPI.fetchMovieById(movieId).then(setMovie);
    movieAPI.fetchMovieCasts(movieId).then(cast => setCasts(cast.cast));
    movieAPI
      .fetchMovieRewiews(movieId)
      .then(review => setReviews(review.results));
  }, [movieId]);

  const getGenre = genres => {
    const result = [];
    genres.map(genre => result.push(genre.name));
    return result.join(', ');
  };
  const handleGoBack = () => {
    history.push(location.state?.from ? location.state.from : '/');
  };
  const dontHaveReview = reviews.length === 0;

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      {movie && (
        <div className={s.container}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie cover"
              height={300}
            />
          </div>
          <div>
            <h2>
              {movie.title} (<span>{movie.release_date.slice(0, 4)}</span>)
            </h2>
            <p>
              <span className={s.info}>User Score:</span> {movie.vote_average}
            </p>
            <p>
              <span className={s.info}>Original language:</span>{' '}
              {movie.original_language}
            </p>
            <p>
              <span className={s.info}>Genres:</span> {getGenre(movie.genres)}
            </p>

            <p>
              <span className={s.info}>Overview:</span> {movie.overview}
            </p>
          </div>
        </div>
      )}

      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/cast`}>{casts && <Cast casts={casts} />}</Route>

        <Route path={`${path}/reviews`}>
          {dontHaveReview ? (
            <p>We don't have any reviews for this movie</p>
          ) : (
            <Reviews reviews={reviews} />
          )}
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
