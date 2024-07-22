const axios = require('axios');

const add = (a: number, b: number): number  => a + b;

const getTopStories = async (apiToken: string, country = 'us', limit = 3): Promise<any> => { 
    
    const url = `https://api.thenewsapi.com/v1/news/top?api_token=${apiToken}&locale=${country}&limit=${limit}`;
    try {  
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export {add, getTopStories};
  


