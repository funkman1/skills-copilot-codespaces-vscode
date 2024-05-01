// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Create comments array
const comments = [
    { id: 1, username: 'alice', comment: 'I love coding' },
    { id: 2, username: 'bob', comment: 'I love React' },
    { id: 3, username: 'charlie', comment: 'I love Node.js'}
]; // Add closing square bracket here

