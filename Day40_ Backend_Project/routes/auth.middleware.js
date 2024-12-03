// hum ye sara code controller me logoutUser function ke andar bhi bana sakte the but waha ye  code re-use nahi ho pata , kyuki aisa nahi hai ki sirf logout karne ke liye hi user ki information ki zaroorat hai , humko kai baar iski zaroorat hogi, ho sakta hai post like karna ho ya post karna ho , kuch bhi karwana ho user se to pata karna padega ki user authenticated hai ya nahi hai 

import ApiError from "../utils/api_error.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async(req, res, next) => { 
// export const verifyJWT = asyncHandler(async(req, _ , next) => {  
    // req, next ka use ho raha hai par res khali pade hai to res ke jagah pe _ i,e underscore likh sakte hai 
    try {
        const token =  req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            throw new ApiError(401, "unauthorized request ")
        }
     
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
     
        await User.findById(decodedToken?._id).select("-password -refreshToken")
        
        if (!user) {
            throw new ApiError(401, "invalid access token")  
        }

        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid Access Token")
        
    }
    
    })