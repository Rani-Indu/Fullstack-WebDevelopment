const http = require('http');

const server = http.createServer((req, res) => {  // creating server
    if (req.url == '/') {
        res.write('<h1>Hello, Nodejs !</h1>'); 
    } else if(req.url == '/about'){
        res.write()
    }
    res.end('<h1>About page !</h1>');
});

server.listen(5001);
console.log('the HTTP server is running on port 5001');