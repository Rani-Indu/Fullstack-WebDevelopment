require('dotenv').config();
// console.log(process.env)
const express = require("express");
const connectToDb = require("./config/db");
const app = express();
const userRoutes = require("./routes/userRoutes")


// init connection to db
connectToDb() 

app.get('/', userRoutes)






module.exports = app;
// This line exports the app instance so that it can be used in other files. In Node.js, module.exports is used to make the app object available to other modules (files). This is helpful in larger applications where the server logic is split across multiple files.

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
 