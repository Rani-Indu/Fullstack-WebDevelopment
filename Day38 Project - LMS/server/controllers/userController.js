import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";

const cookieOptions = {
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
    httpOnly: true,
    secure: true
}


const register = async (req, res, next) => {
    const {fullName, email, password} = req.body;

    if (!fullName || !email  || !password){ 
        return next ( new AppError('All fields are required', 400))
    }

    const userExists = await User.findOne({ email });

    if (userExists){ 
    return next(new AppError('Email already exists', 400));
    }
    // if user doesn't exist then we'll creating user
    // earlier we used .save for this eg -  const result = await userInfo.save();
    // now we'll do it in 2 step process
    // 1st : we'll store basic information of user in db
    // we'll upload user profile in 3rd party, if it fails we'll try again, once it is done we'll save again
    const user = await User.create({
        fullName,
        email,
        password,
        avatar: {
            public_id: email,
            secure_url: 'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar'
        }
    });
    if (!user) {
        return next(new AppError('User registration failed, please try again later', 400))
    }

    // TODO: file upload
    // next we'll write logic to upload file / image/ avatar

    await user.save(); //after uploading file we'll save again

    user.password = undefined;

    const token = await user.generateJWTToken();// no need to import user.model.js as it is under user , and we have a instance of user here

    res.cookie('token', token, cookieOptions)

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user,
    })
}

const login = async(req, res, ) => {
    try {
        
        const {email, password} = req.body;
        
        if (!email  || !password){ 
            return next ( new AppError('All fields are required', 400))
        }

    const user = await User.findOne({ email }).select('+password');

if (!user || !user.comparePassword(password)){ 
    return next(new AppError("Email or password does not match", 400));
}

// generate JWT token
const token = await user.generatejwtToken();
user.password = undefined //user ke paas password na chala jaye
res.cookie('token', token, cookieOptions);

res.status(201).json({
    success: true,
    message: 'User logged in successfully',
    user,
})
} catch (error) {
    return next(new AppError(error.message, 500));   
}



}


const logout = (req, res) => {
    // best way iscookie delete kar do user automatically logout ho jayega
    res.cookie('token', null,{
        secure: true,
        maxAge: 0,
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'User logged out successfully'
    })
};


const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId)
        
        res.status(200).json({
            success: true,
            message: 'user details',
            user
        })
    } catch (error) {
        return next(new AppError("failed to fetch profile", 400));
        
    }
}





export{
    register,
    login,
    logout,
    getProfile
}