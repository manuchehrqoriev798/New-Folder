import axios from 'axios';

export default async function handler(req, res) {
    const API_KEY = process.env.NEWS_API_KEY;
    
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                country: req.query.country || 'us',
                apiKey: API_KEY
            }
        });
        
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
} 