const express = require('express');
const { signup } = require('../controller/authController');
const authRouter = express.Router();

// route('path', controller)
authRouter.post('/signup', signup )