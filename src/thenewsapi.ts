const axios = require('axios');

/**
 * Retrieves the top news stories using thenewsapi API.
 * 
 * @param apiToken - The API token to authenticate the request.
 * @param locale - The locale code for the news locale (default: 'us').
 * @param limit - The maximum number of news stories to retrieve (default: 3).
 * @returns A Promise that resolves to an array of top news stories.
 * @throws If an error occurs during the API request.
 */

const baseUrl = 'https://api.thenewsapi.com/v1/news/';

const getTopStories = async (apiToken: string, locale = 'us', limit = 3): Promise<any> => { 
    const params = new URLSearchParams({api_token: apiToken, locale: locale, limit: limit.toString()});
    const endpoint = `${baseUrl}top`;
    const url = `${endpoint}?${params}`;
    try {  
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllNews = async (apiToken: string, language = 'en', limit = 3): Promise<any> => {
    const params = new URLSearchParams({api_token: apiToken, language: language, limit: limit.toString()});
    const endpoint = `${baseUrl}all`;
    const url = `${endpoint}?${params}`;
    try {
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {getTopStories, getAllNews};