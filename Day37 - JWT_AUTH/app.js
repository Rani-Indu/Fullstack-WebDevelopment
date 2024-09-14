require('dotenv').config();
const connectToDb = require('./config/db')
const authRouter = require('./router/authRouter')
const express = require('express')
const app = express()

connectToDb();

app.use('/api/auth', authRouter)

app.use(express.json());

app.post('/signup', )
app.use('/', (req, res) => {
  res.status(200).json({data: 'JWTauth server'})
})
module.exports = app;