
import axios from 'axios';

const baseUrl = 'https://api.worldnewsapi.com/';
const getTopNews = async () => {
    const endpoint = `${baseUrl}top-news`;
    try {
        const response = await axios.get(endpoint);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { getTopNews };