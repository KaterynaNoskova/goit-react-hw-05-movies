import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation } from './navigation/Navigation';

const Home = lazy(() => import('./home/Home'));
const MovieDetails = lazy(() => import('./MoviesDetails'));
const Movies = lazy(() => import('./movies/Movies'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Cast = lazy(() => import('./credits/Cast'));
const ErrorMessage = lazy(() => import('./ErrorMessage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </>
  );
};
