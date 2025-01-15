import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from 'cloudinary';
import fs from 'fs/promises';

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

    console.log(req.file);    
    console.log('File Details > ', JSON.stringify(req.file));    
    if (req.file) {
        try {
            // cloudinary pe upload karne wale hai
            //  cloudinary pe jo img upload hoti hai wo async me hoti hai 
            const result = await cloudinary.v2.uploader.upload(req.file.path, {
                folder: 'lms',
                width: 250,
                height: 250,
                gravity: 'faces',
                crop: 'fill'
            });

            if(result) { // agar hum result mil jata hai to upper jo dummy data diya hai usko modify karenge as below
                user.avatar.public_id = (await result).public_id;
                user.avatar.secure_url = (await result).secure_url;


                // remove file from server
                fs.rm(`uploads/${req.file.filename}`)
            }
            
        } catch (error) {
            return next(
                new AppError(error || 'file not uploaded, please try again', 500)
            )
            
        }
    }

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

const forgotPassword = async (req, res) => {
    // humko email dena hoga 
    const {email} = req.body;

    if (!email) { // agar email nahi diya hai 
        return next(new AppError('Email is required', 400));
    }
    
    //agar email diya hai - db se validate karna hoga email exist karta hai ya nahi 
    const user = await User.findOne({email});
    //agar email nahi mila to error throw karenge
    if (!user) {
        return next(new AppError('Email not registered', 400));    
    }

    // generate new token 
    //agar email correct hai to ek random url generate karenge, to resetToken generate kar lete hai uske basis pe url generate kar lenge 
    const resetToken = await user.generatePasswordResetToken();

    // next step : 
    //  save token in db 
    await user.save();
    // + send email with new url containing token
    // save karne ke baad humko url generate karna hai i,e resetPasswordURL, ye url hoga jisko hume email me send karna hai , ki ish url ko trigger karo apna kaam karne ke liye

    // wo url kaha se aayega, 
    // ye url kis chiz ka haoga , hamara frontend ek domain pe hosted hai eg - http://localhost:3000 ish url pe hi kuch aur url hoga jaha pe ye kaam kar raha hoga 
    
    const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`

    console.log(resetPasswordURL);
    
    // url me token set kar ke send karte hai 
    
    // hum resetToken ko path me de sakte hai jaise yaha, ya phir query param me bhi de sakte hai 

    // ye url (i,e resetPasswordURL) khulega react application me - react application me ish token ko read karna hoga - ushko read karoge + option aayega email dalne ke liye in dono ka combination me send karna hoga 

    // ye jo url generate hua hai isko email send karenge 

    // email send karna hai 
    const subject = 'Reset Password';
    const message = 'you can reset yourpasswordd by clicking <a href=${resetPasswordURL}></a>'
    try {
        await sendEmail(email, subject, message)  

        res.status(200).json({
            success: true,
            message: `reset password token has been sent to ${email} successfully`
        })
    } catch (error) {
        // agar kisi wajah se email send nahi hua , email fat gaya to hum token and expiry ko undefined kar denge , security purpose se 

        // aisa isliye karenge kyuki humne token db me already save kar diya hai but email send nahi ho paya  - so agar hum retry karna cahate hai to previous values ko undefined / reset i,e invalid kar denge taki koi confusion na ho retry karne pe

        // aisa isliye karenge kyuki hum nahi cahate ki 2 alag alag token generate ho , aur user purane wale email me jaye aur usko expire mile jab ki 15 min bhi nahi hue hai 

        user.forgotPasswordToken= undefined ,
        user.forgitPasswordExpiry= undefined
        return next(new AppError(error.message, 500));   
    }


};


const resetPassword = () => {};



export{
    register,
    login,
    logout,
    getProfile,
    forgotPassword,
    resetPassword
}