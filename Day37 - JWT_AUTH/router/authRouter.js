const express = require('express');

const authRouter = express.Router();

// const {home} = require('../controller/authController')
const {home, signup} = require('../controller/authController')

authRouter.get('/', home)
authRouter.post('/signup', signup)



module.exports = authRouter;