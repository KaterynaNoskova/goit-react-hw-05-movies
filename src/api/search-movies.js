import axios from "axios";

const API_KEY = "1abb76271df016504764626124badd3a";
const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const searchMovies = async (query) => {
    try {
        const resp = await axios.get(BASE_URL, {
            params: {
                api_key:API_KEY,
                query,
            }
        });
        return resp.data.results;
    }catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}