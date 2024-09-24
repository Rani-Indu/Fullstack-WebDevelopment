const express = require('express');
const jwtAuth = require("../middleware/jwtAuth")

const authRouter = express.Router();

// const {home} = require('../controller/authController')
// const {signup} = require('../controller/authController')
// const {signup, signin} = require('../controller/authController')
// const {signup, signin, getUser} = require('../controller/authController')
const {signup, signin, getUser, logout} = require('../controller/authController')

// authRouter.get('/', home)
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/user', jwtAuth, getUser);
authRouter.post('/logout',jwtAuth, logout); 



module.exports = authRouter;