//                              statuscode: 200

// const http = require('http');

// const PORT = 3024;
// const HOSTNAME = 'localhost';

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-type', 'text/plain');
//     res.end('Node server created by Indu Rani!');
// });

// server.listen(PORT, () => {
//     console.log(`server running at ${HOSTNAME}: ${PORT}`);
// });

//                                  Statuscode: 500

const http = require('http');

const PORT = 3025;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({error: "Server Error!"}));
});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
});