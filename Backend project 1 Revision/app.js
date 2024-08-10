require('dotenv').config();
const express = require ('express');
const cors = require("cors")
const connectToDb = require('./config/db.js')
const userRoutes = require("./routes/userRoutes.js")

const app = express();

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
// init connection to db 
connectToDb()

// app.get('/', userRoutes);
// app.use as we are handling everything in 
app.use('/', userRoutes);
// app.get('/', (req, res) => {
// 	res.send('Hii Indu!')
// });

module.exports = app;
