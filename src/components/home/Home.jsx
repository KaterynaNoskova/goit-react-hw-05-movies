import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'api/get-trending';
import css from './Home.module.css';

const Home = () => {
    const [moviesTrend, setMoviesTrend] = useState([]);
    const [load, setLoad] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const getTrendingMov = async () => {
            try {
                const data = await getTrending();
                setLoad(true);
                setMoviesTrend(data);
            } catch (error) {
                console.error('Error credits:', error.message);
            } finally {
                setLoad(false);
            }
        };
        getTrendingMov();
    }, []);
    return (
        <div>
            <span className={css.homeTitle}>Trending today</span>
            {load ? (
                <p>Wait a minute...</p>
            ) : (
                <ul>
                    {moviesTrend.map(({ id, title }) => (
                        <li key={id} className={css.homeLi}>
                            <Link className={css.homeLink} to={`/movies/${id}`} state={{ form: location }}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default Home;