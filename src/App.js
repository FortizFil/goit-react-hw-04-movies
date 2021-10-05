import './App.css';
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Appbar from './components/AppBar/AppBar';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  return (
    <>
      <Appbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
