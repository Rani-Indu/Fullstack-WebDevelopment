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
    // creating user
    // earlier we used .save for this eg -  const result = await userInfo.save();
    // now we'll do it in 2 step process
    // 1st : we'll store basic information of user in db
    // we'll upload user profile in 3rd party , once it is done we'll save again
    // const user = await User.create({
    //     fullName,
    //     email,
    //     password,
    //     avatar: {
    //         public_id: email,
    //         secure_url: 
    //     }
    // })
}


const login = (req, res) => {}
ssssss

const logout = (req, res) => {}


const getProfile = (req, res) => {}





export{
    register,
    login,
    logout,
    getProfile
}