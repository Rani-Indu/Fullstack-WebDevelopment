require('dotenv').config();
const connectToDb = require('./config/db')
const authRouter = require('./router/authRouter')
const express = require('express')
const app = express()
const cookieParser = require("cookie-parser")

app.use(express.json());
// jaise humne upper wala code use kiya tha ushi tarah cookieParser ko bhi use karenge
app.use(cookieParser());
// kisi bhi route me jane se pehle use kar lena cookieParser ko to ensure ki cookies parse ho gai hai

connectToDb();

app.use('/api/auth', authRouter)


app.use('/', (req, res) => {
  res.status(200).json({data: 'JWTauth server'})
})
module.exports = app;