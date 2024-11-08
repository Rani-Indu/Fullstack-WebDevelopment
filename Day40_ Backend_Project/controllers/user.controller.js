import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;
  console.log("email: ", email);

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
});


export { registerUser };
