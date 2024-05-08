// const http = require('http');

// const PORT = 3024;
// const HOSTNAME = 'localhost';

// const server = http.createServer((req, res) => {
//     /* Home Page
//     About Page
//     Contact Page
//     Product Page
//     Rest... > Error */

//     if (req.url == '/') {
        
//     } else if (req.url == '/about') {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'text/plain');
//         res.end("About Page");   
        
    
//     } else if (req.url == '/contact') {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'text/plain');
//         res.end("Contact Page");   
        
    
//     } else if (req.url == '/product') {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'application/json');
//         res.end(JSON.stringify({productName: "Product 1"})); 

//     } else {
//         res.statusCode = 500;
//         res.setHeader('content-type', 'text/plain');
//         res.end("Server Error!!");

//     }
// });

// server.listen(PORT, () => {
//     console.log(`server running at ${HOSTNAME}: ${PORT}`);
// });

//  fetching product details from other server/ api instead of hard coding it 


const http = require('http');

const PORT = 3032;
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
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('content-type', 'application/json');
                res.end(data.toString());
            })
        
        });
        
        apiReq.on("error", () => {
            console.log(e);
        })
        
        apiReq.end();
        

    } else {
        res.statusCode = 500;
        res.setHeader('content-type', 'text/plain');
        res.end("Server Error!!");

    }
});

server.listen(PORT, () => {
    console.log(`server running at ${HOSTNAME}: ${PORT}`);
});