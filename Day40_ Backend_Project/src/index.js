import express from "express"
// import app from "./app.js"
import { app } from "./app.js"
import connectToDB from "../db/db.js"


connectToDB()
app.get('/', (req, res) => {
    res.send('Hello World!')
  })