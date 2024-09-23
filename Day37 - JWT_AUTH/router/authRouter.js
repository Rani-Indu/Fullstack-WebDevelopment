const express = require('express');
<<<<<<< HEAD
const jwtAuth = require("../middleware/jwtAuth")
=======
>>>>>>> origin/main

const authRouter = express.Router();

// const {home} = require('../controller/authController')
// const {signup} = require('../controller/authController')
// const {signup, signin} = require('../controller/authController')
<<<<<<< HEAD
// const {signup, signin, getUser} = require('../controller/authController')
const {signup, signin, getUser, logout} = require('../controller/authController')
=======
const {signup, signin, getUser} = require('../controller/authController')
>>>>>>> origin/main

// authRouter.get('/', home)
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
<<<<<<< HEAD
authRouter.get('/user', jwtAuth, getUser);
authRouter.post('/logout',jwtAuth, logout); //logout karne ke liye user ka logged in hona zaroori hai , so jwtAuth use karenge , ensure karne ke liye ki user logged in ho
// agar koi bhi logged in user ka route use karna hai to jwtAuth middleware zaroor use karenge, taki ensure kar sake ki ye operation logged in user ke liye kar rahe hai
=======
authRouter.get('/getUser', getUser);
>>>>>>> origin/main


module.exports = authRouter;