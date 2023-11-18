import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation } from './Navigation';

const HomePage = lazy(() => import('./HomePage'));
const MovieDetails = lazy(() => import('./MoviesDetails'));
const Movies = lazy(() => import('./Movies'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const Credits = lazy(() => import('./credits/Credits'));
const ErrorMessage = lazy(() => import('./ErrorMessage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />

          <Route path="movies" element={<Movies />} />

          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Credits />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </>
  );
};
