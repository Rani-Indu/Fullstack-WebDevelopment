import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js";
import { User } from "../models/user.model.js"



const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
  console.log("email: ", email);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = User.findOne({
    // $or: [{}, {}] //jitni value check karni hai check kar do object ke andar 
    $or: [{ username }, { email }]  
    // ye return kare ga humko jo bhi isko first document mila hai jo match karta hai ish email ko ish username ko wo humko mil jayega 
    // hold it into a variable existedUser 
})

// so now if existedUser i,e user exist then throw error
  if (existedUser) {throw new ApiError(409, "User with email or username already exists")}
});


export { registerUser };
