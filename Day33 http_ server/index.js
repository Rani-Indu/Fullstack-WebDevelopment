const http = require('http');

const PORT = 3022;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('Node server created by Indu Rani!');
});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
});