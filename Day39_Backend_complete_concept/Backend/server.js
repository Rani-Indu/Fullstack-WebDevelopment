import express from 'express'
const app = express();

// app.get('/', (req, res) => {
//     res.send('server is ready')
// })

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
    
});

// common js - require syntax - for synchronous code
// ES6 js - import syntax - for asynchronous code

// list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1 ,
            title: 'Another joke', 
            content: 'This is another joke'  
        },
        {
            id:2 ,
            title: 'Another joke', 
            content: 'This is another joke'  
        },
        {
            id:3 ,
            title: 'Another joke', 
            content: 'This is another joke'  
        },
    ];
    res.send(jokes)
})