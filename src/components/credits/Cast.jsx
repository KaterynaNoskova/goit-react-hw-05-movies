import { getMoviesCredits } from "api/get-movie-credits";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import stub from '../images/stub.png';
//import css

function Cast(){
    const [credit, setCredit] = useState([]);
    const [load, setLoad] = useState(true);
    const {movieId} = useParams();

    useEffect(() => {
        const getMoviesCr = async () => {
            try {
                const data = await getMoviesCredits(movieId);
                setCredit(data);
            } catch (error) {
                console.error('Error credits:', error.message);
            } finally {
                setLoad(false);
            }
        };
        getMoviesCr();
    }, [movieId]);
    if (load) {
        return <p>Wait a minute...</p>;
    }
    if (!credit || credit.length === 0) {
        return <p>Don't found. Please try more.</p>;
    }
    return (
        <>
            <ul>
                {credit.map(({ id, name, profile_path, character }) => (
                    <li key={id}>
                        {profile_path === null ? (
                            //import logo
                            <img src={stub} alt={name} width="92" height="92"></img>
                        ) : (<img src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                            alt={name}></img>)}
                        <span>{name}</span>
                        <p>{character}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default Cast;