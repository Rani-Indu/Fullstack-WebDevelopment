import User from "../models/user.model";
import AppError from "../utils/error.util"

const register = async (req, res, next) => {
    const {fullName, email, password} = req.body;

    if (!fullName || !email  || !password){ 
        return next ( new AppError('All fields are required', 400))
    }

    const userExists = await User.findOne({ email });

    if (userExists){ 
    return next(new AppError('Email already exists', 400));
    }
    // creating user
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
        return next(new AppError('User registration failed, please try again later'))
    }

    // TODO: file upload

    await user.save();

    user.password = undefined;

    res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user,
    })
}

const login = (req, res) => {}


const logout = (req, res) => {}


const getProfile = (req, res) => {}





export{
    register,
    login,
    logout,
    getProfile
}