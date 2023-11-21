import axios from "axios";

const API_KEY = "1abb76271df016504764626124badd3a";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const getMoviesReviews = async (movie_id) => {
    try {
        const resp = await axios.get(`${BASE_URL}${movie_id}/reviews`, {
            params: {
                api_key:API_KEY,
            }
        });
        const {results} = resp.data;
        return results;
    }catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}