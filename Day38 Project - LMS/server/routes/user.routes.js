import express from "express";
import {register,login,logout,getProfile} from "../controllers/userController.js"

import {Router} from "express"

const router = Router();


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', getProfile);






export default router;