require('dotenv').config();
const express = require ('express');
const connectToDb = require('./config/db.js')
const app = express();

// init connection to db 
connectToDb()

app.get('/', (req, res) => {
	res.send('Hii Indu!')
});

module.exports = app;
