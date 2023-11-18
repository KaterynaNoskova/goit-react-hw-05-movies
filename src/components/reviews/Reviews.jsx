import { getMoviesReviews } from "api/get-movie-reviews";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import css

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [load, setLoad] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        const getMoviesRev = async () => {
            try {
                const data = await getMoviesReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error('Error credits:', error.message);
            } finally {
                setLoad(false);
            }
        };
        getMoviesRev();
    }, [movieId]);
    if (load) {
        return <p>Wait a minute...</p>;
    }
    if (!reviews || reviews.length === 0) {
        return <p>Don't found. Please try more.</p>;
    }
    return(
        <>
        <ul>
            {reviews.map(({id, author, content}) =>(
                <li key={id}>
                    <span>Author: {author}</span>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Reviews;