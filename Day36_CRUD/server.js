const app = require('./app')

const port = process.env.port || 8000;


app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
})


