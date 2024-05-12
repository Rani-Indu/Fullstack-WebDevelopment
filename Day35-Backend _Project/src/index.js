// const express = require('express')
// import express from "express"
// const app = express()
import app from './app.js'
import mongoose from 'mongoose';

const port = 3000

// database connection mongodb
// const mongoose = require('mongoose');

// 127.0.0.1:27017/  or write localhost - same thing



// async IIFE - to handle situation of database in another continent
(async() => {
  // try catch - to handle database connection failure
  try {
    await mongoose.connect('dbstring');
    console.log('DB connected successfully ');

    app.on("error",() => {
      console.log('Error', err);
      throw err;
    })

    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  } catch (error) {
    console.error("error", err);
    throw err
    
  }
})()


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })