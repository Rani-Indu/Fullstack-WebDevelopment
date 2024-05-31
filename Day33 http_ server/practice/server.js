// const http = require('http');

// Server = http.createServer((req, res) => {
//     if(req.url == '/'){
//         res.write('<h1>Hello! World</h1>')
//     }
//     res.end();
// });

// Server.listen(2000);
// console.log('server is running at port 2000');


// const http = require('http');
// const PORT = 2020;
// HOSTNAME = 'localhost';

// const Server = http.createServer((req, res) => {

//     // res.statusCode = 200;
//     // res.setHeader('content-type', 'text/plain');
//     // res.end('node server created by me');

//     res.statusCode = 500;
//     res.setHeader('content-type', 'application/json');
//     res.end(JSON.stringify({error: 'Server Error!'}));
// });

// Server.listen(PORT, () => {
//     console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
// });


const http = require('http');
const PORT = 3020;
HOSTNAME = 'localhost';

const Server = http.createServer((req, res) => {
    if(req.url = '/'){
        res.statusCode == 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello world');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('about Page!');
    }
    else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('contact Page!');
    }
    // else if(req.url == '/product'){
    //     res.statusCode = 200;
    //     res.setHeader('Content-Type', 'text/plain');
    //     res.end(JSON.stringify({productName: "Product 1"}));
    // }
    
    else if(req.url == '/product'){
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data.toString()));
                
            })
        });
        
        apiReq.on('error', () => {
            console.log(e);
        })
        
        apiReq.end();
    }
    else {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('server error!');
    }
});

Server.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
});
