const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GistのRaw URL
const GIST_RAW_URL = 'https://gist.githubusercontent.com/kaijisuruzo/fd84d84ed5311ee6cec5829a6e85d892/raw';

app.get('/script', async (req, res) => {
    try {
        const response = await fetch(GIST_RAW_URL);
        if (!response.ok) throw new Error('Failed to fetch script');
        const scriptText = await response.text();
        
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send(scriptText);
    } catch (error) {
        res.status(500).send('-- Error loading script');
    }
});

app.get('/', (req, res) => {
    res.send('API Server is Running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
