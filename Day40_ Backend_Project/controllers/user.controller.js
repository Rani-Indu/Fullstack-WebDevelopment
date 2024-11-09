import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js";
import { User } from "../models/user.model.js"



const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
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

  if (existedUser) {throw new ApiError(409, "User with email or username already exists")
  }

  // checking for images, avatar

  req.files?.avatar[0]?.path


});


export { registerUser };
