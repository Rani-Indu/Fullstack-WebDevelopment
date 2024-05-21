const express = require("express");

// const {home} = require("../controllers/userController.js")
const {home, createUser} = require("../controllers/userController")

const router = express.Router()
router.get('/', home)
router.post('/createUser', createUser)

module.exports = router;

// const userRoutes = require('./router/userRoutes.js')