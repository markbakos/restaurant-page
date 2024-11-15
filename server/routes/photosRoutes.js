const express = require('express');
const router = express.Router();

router.get('/photos', async (req, res) => {
    try {
        const response = await fetch('https://api.pexels.com/v1/search?query=restaurant&per_page=10', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: process.env.PEXELS_KEY,
            },
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error(`Pexels API Error: ${response.status} - ${errorDetails}`);
            return res.status(response.status).json({ error: 'Failed to fetch photos from Pexels API' });
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error in /photos route:', error);
        res.status(500).json({ error: 'Internal server error while fetching photos' });
    }
});

module.exports = router;
