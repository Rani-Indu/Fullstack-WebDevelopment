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
Server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.write('<h1>Hello !!! World</h1>')
    }
    else if (req.url == '/about'){
        res.write('<h3> About Page </h3>')
    }
    res.end();
}) 
Server.listen(2001)
console.log('server is listening at port 2001');