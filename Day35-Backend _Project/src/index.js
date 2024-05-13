// // const express = require('express')
// // import express from "express"
// // const app = express()
// import app from './app.js'
// import mongoose from 'mongoose';

// const port = 3000

// // database connection mongodb
// // const mongoose = require('mongoose');

// // 127.0.0.1:27017/  or write localhost - same thing



// // async IIFE - to handle situation of database in another continent
// (async () => {
//   // try catch - to handle database connection failure
//   try {
//     await mongoose.connect('dbstring');
//     console.log('DB connected successfully ');

//     app.on("error",() => {
//       console.log('Error', err);
//       throw err;
//     })

//     app.listen(port, () => {
//       console.log(`listening on port ${port}`);
//     })
//   } catch (error) {
//     console.error("error", err);
//     throw err
    
//   }
// })()


// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })




// Importing required modules
import app from './app.js';
import mongoose from 'mongoose';

// Defining the port number
const port = 3000;

// Establishing database connection
(async () => {
  try {
    await mongoose.connect('mongodb+srv://indupwskills:Indu5843@testdb.qiti6il.mongodb.net/todoapp');
    console.log('DB connected successfully');

    // Adding error event listener for the app
    app.on("error", (err) => {
      console.log('Error', err);
      throw err;
    });

    // Starting the server
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (err) {
    console.error("Error", err);
    throw err;
  }
})();
