const express = require("express")

const {home} = require("../controllers/userController.js")

const router = express.Router()
router.get('/', home)

module.exports = router

const userRoutes = require('./router/userRoutes.js')