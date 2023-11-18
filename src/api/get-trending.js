import axios from "axios";

const API_KEY = "1abb76271df016504764626124badd3a";
const BASE_URL = "https://api.themoviedb.org/3/trending/movie/week";

export const getTrending = async () => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                api_key:API_KEY,
            }
        });
        return response.data.results;
    }catch(error){
        console.error('Error:', error.message);
        throw error;
    }
}