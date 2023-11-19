import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'api/search-movies';
import { SearchBar } from '../searchbar/SearchBar';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const queryStringUpdate = name => {
    if (name === '') return;
    setSearchParams({ searchQuery: name });
    getMovies(name);
  };
  const getMovies = async query => {
    try {
      const movies = await searchMovies(query);
      setMovies(movies);
    } catch (error) {
      console.error('Error in movies:', error.message);
    }
  };
  useEffect(() => {
    if (searchQuery !== '') {
      getMovies(searchQuery);
    }
  }, [searchQuery]);
  return (
    <div>
      <SearchBar value={searchQuery} onSubmit={queryStringUpdate} />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id} className={css.moviesLi}>
            <Link
            className={css.moviesLink}
              to={`${id}`}
              state={{
                from: location,
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;