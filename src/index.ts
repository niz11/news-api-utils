const axios = require('axios');

const add = (a: number, b: number): number  => a + b;

/**
 * Retrieves the top news stories using thenewsapi API.
 * 
 * @param apiToken - The API token to authenticate the request.
 * @param locale - The locale code for the news locale (default: 'us').
 * @param limit - The maximum number of news stories to retrieve (default: 3).
 * @returns A Promise that resolves to an array of top news stories.
 * @throws If an error occurs during the API request.
 */

const getTopStories = async (apiToken: string, locale = 'us', limit = 3): Promise<any> => { 
    
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${apiToken}&locale=${locale}&limit=${limit}`;
    try {  
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export {add, getTopStories};
  


