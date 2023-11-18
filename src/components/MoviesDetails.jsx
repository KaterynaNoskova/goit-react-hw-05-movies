import { useState, useEffect, Suspense } from "react";
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { getMoviesDetails } from "api/get-movie-details";
import { LinkBack } from "./LinkBack";
import stub from './images/stub.png'
//import css

function MoviesDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [load, setLoad] = useState(true);
    const location = useLocation();
    const linkGoBack = location.state?.from ?? '/';

    useEffect(() => {
        const getMoviesDet = async () => {
            try {
                const data = await getMoviesDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error('Error details:', error.message);
            } finally {
                setLoad(false);
            }
        };
        getMoviesDet();
    }, [movieId]);
    if (load) {
        return <p>Wait a minute...</p>;
    }
    if (!movie) {
        return <p>Movie don't found. Try find anythings else.</p>;
    }
    const { release_date, popularity, poster_path, title, overview, genres } =
        movie;
    const dateFixed = release_date ? release_date.slice(0, 4) : 'In ancient ages';
    const scoreFixed = popularity
        ? Number.parseInt(popularity / 10)
        : 'No score yet';
    const urlFixed = `https://image.tmdb.org/t/p/w185${poster_path}`;
    return(
        <>
        <div>
            <LinkBack to={linkGoBack}>Go back</LinkBack>
        </div>
        <div>
        {poster_path === null ? (
          <img src={stub} alt={'Poster'} />
        ) : (
          <img src={urlFixed} alt={title} />
        )}
        <div>
        <h2>{title}</h2>
          <p>({dateFixed})</p>
          <p>User score: {scoreFixed}%</p>
          {overview && (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}
          {genres && genres.length > 0 && (
            <>
              <h3>Genres</h3>
              <div>
                {genres.map(({ id, name }) => (
                  <p key={id}>{name}</p>
                ))}
              </div>
            </>
          )}
        </div>
        </div>
        <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Suspense fallback={<div>Loading...Wait a minute...</div>}>
          <Outlet />
        </Suspense>
      </div>
        </>
    )
}
export default MoviesDetails;