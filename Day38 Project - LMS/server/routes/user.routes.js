import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";
import {register,login,logout,getProfile, forgotPassword,resetPassword } from "../controllers/userController.js";

import express from "express";
import {Router} from "express"
const router = Router();


router.post('/register',upload.single('avatar'), register); 
router.post('/login', login);
router.get('/logout', logout);
router.get('/me',isLoggedIn, getProfile);
router.post('/reset', forgotPassword);
router.post('/reset/:resetToken', resetPassword);






export default router;