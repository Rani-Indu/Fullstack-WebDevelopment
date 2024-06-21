const express = require('express');
const { signup } = require('../controller/authController');
const authRouter = express.Router(); // creating router instance

// route('path', controller)
authRouter.post('/signup', signup )

module.exports = authRouter;s