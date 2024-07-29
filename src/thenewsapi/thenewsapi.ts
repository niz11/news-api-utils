import axios from 'axios';
import { ParamsObjectType } from './thenewsapiTypes';
/**
 * Retrieves the top news stories using thenewsapi API.
 * 
 * @param apiToken - The API token to authenticate the request.
 * @returns A Promise that resolves to an array of top news stories.
 * @throws If an error occurs during the API request.
 */

const baseUrl = 'https://api.thenewsapi.com/v1/news/';

const getTopStoriesParamsHelp = () => {
    return {
        generalNote: "NO need to URL encode the values. The function will handle that for you.",
        apiToken: 'Your API token which can be found on your account dashboard.',
        search: 'Use the search as a basic search tool by entering regular search terms or it has more advanced usage to build search queries: + signifies AND operation, | signifies OR operation, - negates a single token, \" wraps a number of tokens to signify a phrase for searching. * at the end of a term signifies a prefix query, ( and ) signify precedence. When using special characters (+, -, |, ", *, ()).',
        search_fields: "Comma separated list of fields to apply the search parameter to. Supported fields: title | description | keywords | main_text. E.g. search_fields=title,description",
        locale: 'Comma separated list of country codes to include in the result set. Default is all countries.',
        categories: 'Comma separated list of category codes to include in the result set. Default is all categories. Supported categories: general | science | sports | business | health | entertainment | tech | politics | food | trave. E.g. categories=general,science',
        exclude_categories: 'Comma separated list of category codes to exclude from the result set. Default is no categories excluded. Supported categories: general | science | sports | business | health | entertainment | tech | politics | food | trave. E.g. exclude_categories=general,science',
        domains: "Comma separated list of domains to include. List of domains can be obtained through our Sources endpoint, found further down this page.",
        exclude_domains: "Comma separated list of domains to exclude. List of domains can be obtained through our Sources endpoint, found further down this page.",
        source_ids: "Comma separated list of source IDs to include. List of source IDs can be obtained through our Sources endpoint, found further down this page.",
        exclude_source_ids: "Comma separated list of source IDs to exclude. List of source IDs can be obtained through our Sources endpoint, found further down this page.",
        language: "Comma separated list of language codes to include in the result set. Default is all languages.",
        published_before: "Date in the format:  Y-m-d\TH:i:s | Y-m-d\TH:i | Y-m-d\TH | Y-m-d | Y-m | Y.",
        published_on: "Date in the format:  Y-m-d",
        sort: "Sorted by score if search is used, otherwise by published_on. Default is published_at unless search is used and sorting by published_at is not included, in which case relevance_score is used.",
        limit: 'Specify the number of articles you want to return in the request. The maximum limit is based on your plan.',
        page: 'Specify the page number of the results you want to return. Default is 1.',
    }
}

const buildUrl = (endpoint: string, options: ParamsObjectType): string => {
    const filteredParamsObject = Object.keys(options).reduce((acc, key) => {
        if (options[key] !== undefined) {
            acc[key] = options[key];
        }
        return acc;
    }, {} as { [key: string]: any });
    
    const params = new URLSearchParams(filteredParamsObject);
    return `${endpoint}?${params}`;
}
const getTopStories = async (options: ParamsObjectType): Promise<any> => { 
    const endpoint = `${baseUrl}top`;
    const url = buildUrl(endpoint, options);
    try {  
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllNews = async (options: ParamsObjectType): Promise<any> => {
    const endpoint = `${baseUrl}all`;
    const url = buildUrl(endpoint, options);
    try {
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getSimilarStoriesByUUID = async (uuid: string, options: ParamsObjectType): Promise<any> => {
    const endpoint = `${baseUrl}similar/${uuid}`;
    const url = buildUrl(endpoint, options);
    try {
        const response = await axios.get(url);
        return response?.data || [];
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {getTopStoriesParamsHelp, getTopStories, getAllNews, getSimilarStoriesByUUID};