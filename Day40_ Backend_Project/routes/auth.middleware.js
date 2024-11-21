import ApiError from "../utils/api_error";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model";

export const verifyJWT = asyncHandler(async(req, res, next) => { 
    try {
        const token =  req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            throw new ApiError(401, "unauthorized request ")
        }
     
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
     
        await User.findById(decodeToken?._id).select("-password -refreshToken")
        
        if (!user) {
            throw new ApiError(401, "invalid access token")
            // humne middleware bana diya , export bhi kar diya - lekin middleware use kaise aate hai - middleware jo use aate hai wo mostly routes me aate hai 
        }
        req.user = user;
        next()
    } catch (error) {
        
    }
    
    })