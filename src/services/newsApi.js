import axios from 'axios';

// Set up the News API base URL and headers
const newsApi = axios.create({
    baseURL: '/api/news',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch top headlines
export const fetchTopHeadlines = async (country = 'us') => {
    try {
        const response = await newsApi.get(`/top-headlines?country=${country}`);
        if (response.data && response.data.articles) {
            return response.data.articles;
        }
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
        const response = await newsApi.get(`/everything?q=${query}`);
        if (response.data && response.data.articles) {
            return response.data.articles;
        }
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
