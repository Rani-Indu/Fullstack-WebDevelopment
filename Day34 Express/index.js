const express = require('express'); // import express dependency

const app = express();             // generate instance of express and creating server

const PORT = 4010;
HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!!!');
});
app.get('/about', (req, res) => {
    res.send('Hello World!!!');
});
app.get('/contact', (req, res) => {
    res.send('Hello World!!!');
});

app.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}:${PORT}`);
});