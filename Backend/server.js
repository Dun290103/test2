// Import the express and fetch libraries
import express from 'express';
import fetch from "node-fetch";

// Create a new express application
const app = express();

// Send a JSON response to a default get request
app.get('/ping', async (req, res) => {
    const requestOptions = {
        'method': 'GET',
        'headers': {
            'x-api-key': 'igaqjeh2cqga2jmx53tds8n4',
        },
    };

    const response = await fetch(
        'https://api.etsy.com/v3/application/openapi-ping',
        requestOptions
    );

    if (response.ok) {
        const data = await response.json();
        res.send(data);
    } else {
        res.send("oops");
    }
});

// Start the server on port 3003
const port = 3003;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});