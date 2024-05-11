// const express = require('express')
// import express from "express"
// const app = express()
import app from './app.js'
const port = 3000

// database connection mongodb
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/test');
// 127.0.0.1:27017/  or write localhost - samething



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




// async IIFE
(async() => {})()

// try catch
try {
  
} catch (error) {
  console.error("error", err);
  throw err
  
}