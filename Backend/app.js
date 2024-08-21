const express = require("express");
// imports the express module, which is a Node.js framework used to create web applications and APIs. Express provides a robust set of features for building web and mobile applications.
const app = express();
// This line initializes an Express application by calling the express() function. The app variable now holds an instance of an Express application, which can be used to define routes, middleware, and other application settings.

module.exports = app;
// This line exports the app instance so that it can be used in other files. In Node.js, module.exports is used to make the app object available to other modules (files). This is helpful in larger applications where the server logic is split across multiple files.

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
