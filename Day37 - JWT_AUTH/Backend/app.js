const express = require('express');
const authRouter = require('./router/authRoutes');
const app = express();
const  authRouter = require('./router/authRoutes') 


app.use('', authRouter)  // authRouter kaha se milega

app.use('/', (req, res) => {
    res.status(200).json({data: 'JWTauth server - updated'})
})

// since this is a module so we can export it so that we can import in any other place where required

module.exports = app;

