require('dotenv').config();
const express = require('express')
const authRouter = require('./router/authRoutes')
const app = express()
const dbConnection = require('../config/databaseConfig')

dbConnection();
app.use(express.json())
app.use('/api/auth', authRouter)

app.use('/', (req, res) => {
  res.status(200).json({data: 'JWTauth server'})
})


module.exports = app;