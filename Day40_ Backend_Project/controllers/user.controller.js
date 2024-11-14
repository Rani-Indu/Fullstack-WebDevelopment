import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js";
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
  // console.log(req.boy);
  
  console.log("email: ", email);

  // checking if any field is empty
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }


  // checking if user already exist i,e already registered
  const existedUser = User.findOne({
    $or: [{ username }, { email }]  
  })
  // console.log(existedUser);

  if (existedUser) {throw new ApiError(409, "User with email or username already exists")
  }

  // checking for images, avatar

  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
 
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar file is required")
  }
  
  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if (!avatar) {
    throw new ApiError(400, "avatar file is required") 
  }



  User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase()
  }) 
  // we'll check ki sahi me user bana hai ya nahi ki empty return ho gaya hai , 1. we can directly check 
  // 2. User.findByid - User agar successfully create hua hai to mongodb jab data save karta hai to har ek entry ke saath _id naam se ek field add kar deta hai  
  
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
    // agar user create ho gaya hai to find karne pe mil jayega 
  )
  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering the usera")
  }
  // next step 
return res.status(201).json({})
// json response bhenjege - json response jayega uska architecture define hai 
});


export { registerUser };
