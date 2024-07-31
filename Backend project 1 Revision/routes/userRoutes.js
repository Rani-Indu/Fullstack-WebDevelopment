const express = require("express")
const {home} = require("../controllers/userController")

// routing ek special feature hai so humko ek router banana padega
// router bane ga express se , jaise express se app ban rahi thi, waise hi router bhi banta hai

const router = express.Router();

module.exports = router