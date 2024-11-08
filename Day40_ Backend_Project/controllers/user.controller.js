import asyncHandler  from "../utils/asyncHandler.js";
import ApiError from "../utils/api_error.js"

const registerUser = asyncHandler(async(req, res) => {

    const {fullname, email, username, password} = req.body
    console.log("email: ", email);

    // if(
    //     []
    // ) {}

    if(
        // [fullname, email, username, password].some(() => {})
            // curly braces use nahi karenge - nahi to explicit return lagana hoga 
            [fullname, email, username, password].some((field) => field?.trim() === "")
            // some se bhi kar sakte hai , some deta hai true false 
            // map se bhi kar sakte hai 
        ) {
            throw new ApiError(400, "all fields are required")
        }
    // if (fullname === "") {
    //     throw new ApiError(400, "fullname is required")
    //     //ab hum iske through api error ka response de sakte hai  
    //     // ApiError kya kya expect karta hai , see from the file - statuscode, message 
    // }
})

// export default registerUser

export{ registerUser}
