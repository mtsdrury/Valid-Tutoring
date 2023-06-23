const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Add more routes and middleware as needed

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
