import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
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
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  // console.log(existedUser);

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // checking for images, avatar

  // const coverImageLocalPath = req.files?.coverImage[0]?.path;
  //on writing this code we are getting error - {"success":false,"message":"Cannot read properties of undefined (reading '0')"}
  // so let's do it using if else

  let coverImageLocalPath;
  // if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
  if (req.files?.coverImage?.length > 0) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }
  // console.log(req.files);

  const avatarLocalPath = req.files?.avatar?.[0]?.path;

  if (!avatarLocalPath) {
    console.log("req.files:", req.files);
    throw new ApiError(400, "avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "avatar file is required");
  }

  User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering the user");
  }
  // next step
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const {email, username, password} = req.body

// hume dono email ya username me se koi ek to caahiye hi 
  if (!username || !email) {// we don't have email and username 
    throw new ApiError(400), "username or email is required"
  }
  // if (!email) { //we want to login through email
  //   throw new ApiError(400), " email is required"
  // }
  // if (!username) {//we want to login through username
  //   throw new ApiError(400), "username is required"
  // }

  
  // we want to find a user based on username
  User.findOne({username})

  // we want to find a user based on email
  User.findOne({email})
  
  // advance -  user based on email or username

  // $or: [] // array ke andar object pass kar sakte hai, 1st object- username  2nd object- email

  // or operator find karega ek value ya to email ke base pe ya to username ke base pe 

  // db is in another continent so await 

  // user variable me store kar lete hai 

  const user = await User.findOne({
    $or: [ {email}, {username}] 
  })

  // ab agar in dono ke basis pe i,e or lagane pe bhi user nahi mila iska matlab kya hai - iska matlab hai ki wo user kabhi register tha hi nahi i,e 
  if (!user) {
    throw new ApiError(404, "user doesn't exist")
  }

  // agar user mil gaya to kya karenge  - to password check karenge

  // hamare pass method ban sakte hai isPasswordCorrect, bcrypt hume madad kar sakta hai password check karne ke liye , ish bcrypt ko kya dena padega - ek password, aur ek current user ke andar se bhi password dena padega

  // hum jo password denge - password 
  // jo saved / db wala password hai - this.password se mil jayega 
  // bcrypt hai - to await karna hoga - time lagta hai 
  
  // U - User - mongoose ka ek object hai - so mongoose ke through jo methods available hai jaise ki - findOne, updateOne etc ye mongodb ke mongoose ke through available hai 

  // u - user - ye hamara user hai jo humne db se wapas liya hai uska instance liya hai - humne jo methods banaya hai like - isPasswordCorrect, generateAccessToken, generateRefreshToken  etc ye hamare user me available hote hai - agar User.findOne({}) se check karenge to nahi mile ga  
});






export { registerUser, loginUser };
