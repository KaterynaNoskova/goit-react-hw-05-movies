import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'api/get-trending';

export const HomePage = () => {
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
            <span>Trending today</span>
            {load ? (
                <p>Wait a minute...</p>
            ) : (
                <ul>
                    {moviesTrend.map(({ id, title }) => {
                        <li key={id}>
                            <Link to={`/movies/${id}`} state={{ form: location }}>{title}</Link>
                        </li>
                    })}
                </ul>
            )}
        </div>
    )
}