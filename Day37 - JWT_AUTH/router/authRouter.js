const express = require('express');

const authRouter = express.Router();

// const {home} = require('../controller/authController')
// const {signup} = require('../controller/authController')
const {signup, signin} = require('../controller/authController')

// authRouter.get('/', home)
authRouter.post('/signup', signup)
authRouter.post('/signin', signin)



module.exports = authRouter;