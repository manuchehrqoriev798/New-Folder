import axios from 'axios';

// Set up the News API base URL and headers
const newsApi = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Use direct API key
const API_KEY = '312226b6fffb495b89d92b2e08d6e4c4';

// Fetch top headlines
export const fetchTopHeadlines = async (country = 'us') => {
    try {
        const endpoint = `/top-headlines?country=${country}&apiKey=${API_KEY}`;
        const response = await newsApi.get(endpoint);

        // Check if the response contains articles
        if (response.data && response.data.articles) {
            return response.data.articles;
        }

        // Log a warning if articles are missing
        console.warn('No articles found in the response for top headlines');
        return [];
    } catch (error) {
        console.error('Error fetching top headlines:', error);
        return [];
    }
};

// Fetch news by query
export const fetchNewsByQuery = async (query) => {
    try {
        const endpoint = `/everything?q=${query}&apiKey=${API_KEY}`;
        const response = await newsApi.get(endpoint);

        // Check if the response contains articles
        if (response.data && response.data.articles) {
            return response.data.articles;
        }

        // Log a warning if articles are missing
        console.warn('No articles found in the response for query:', query);
        return [];
    } catch (error) {
        console.error('Error fetching news by query:', error);
        return [];
    }
};

// Add a helper function to validate API key
export const validateApiKey = () => {
    if (!API_KEY) {
        console.warn('Warning: API key is missing.');
        return false;
    }
    return true;
};
