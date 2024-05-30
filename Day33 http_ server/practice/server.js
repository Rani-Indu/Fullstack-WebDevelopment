// const http = require('http');

// Server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.write('<h1>Hello! World</h1>')
//     }
//     res.end();
// });

// Server.listen(2000);
// console.log('server is running at port 2000');


const http = require('http');
const PORT = 2020;
HOSTNAME = 'localhost';

const Server = http.createServer((req, res) => {

    // res.statusCode = 200;
    // res.setHeader('content-type', 'text/plain');
    // res.end('node server created by me');

    res.statusCode = 500;
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({error: 'Server Error!'}));
});

Server.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
});
