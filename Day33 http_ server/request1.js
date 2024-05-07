const http = require('http');

const PORT = 3018;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    /* Home Page
    About Page
    Contact Page
    Product Page
    Rest... > Error */

    if (req.url == '/') {
        
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end("About Page");   
        
    
    } else if (req.url == '/contact') {
        res.statusCode = 200;
        res.setHeader('content-type', 'text/plain');
        res.end("Contact Page");   
        
    
    } else if (req.url == '/product') {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({productName: "Product 1"})); 

    } else {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/plain');
        res.end("Server Error!!");

    }
});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
});