const express = require('express');
// authRouter yaha se milega
const authRouter = require('./router/authRoutes');
const databaseconnect = require('./config/databaseConfig');
const app = express();


databaseconnect();

app.use(express.json());
app.use('/api/auth/', authRouter)  // authRouter kaha se milega

app.use('/', (req, res) => {
    res.status(200).json({data: 'JWTauth server - updated'})
})

// since this is a module so we can export it so that we can import it at other place where required

module.exports = app;


