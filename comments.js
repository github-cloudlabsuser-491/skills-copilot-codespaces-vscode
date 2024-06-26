// Create web server
// 1. Start the server
// 2. Listen for incoming requests
// 3. Parse the request
// 4. Handle the request
// 5. Send the response
// 6. Close the connection

// Create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const comments = [
    { id: 1, author: 'John', text: 'A comment' },
    { id: 2, author: 'Jane', text: 'Another comment' },
    { id: 3, author: 'Jack', text: 'Yet another comment' }
];

// 2. Listen for incoming requests
app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});

// 3. Parse the request
app.use(bodyParser.json());

// 4. Handle the request
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Create a new comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,