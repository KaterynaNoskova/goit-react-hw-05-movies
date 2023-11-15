import axios from "axios";

const API_KEY = "1abb76271df016504764626124badd3a";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

export const getMoviesDetails = async (movie_id) => {
    try {
        const resp = await axios.get(`${BASE_URL}${movie_id}`, {
            params: {
                api_key:API_KEY,
            }
        });
        return resp.data;
    }catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}