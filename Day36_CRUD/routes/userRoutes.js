const express = require("express")

// const {home} = require("../controllers/userController.js")
const {home, createUser} = require("../controllers/userController.js")

const router = express.Router()
router.get('/', home)
router.get('/createUser', createUser)

module.exports = router

// const userRoutes = require('./router/userRoutes.js')