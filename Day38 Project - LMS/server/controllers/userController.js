import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import crypto from "crypto";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  httpOnly: true,
  secure: true,
};

const register = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(new AppError("All fields are required", 400));
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new AppError("Email already exists", 400));
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
      secure_url:
        "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar",
    },
  });
  if (!user) {
    return next(
      new AppError("User registration failed, please try again later", 400)
    );
  }

  // TODO: file upload
  // next we'll write logic to upload file / image/ avatar

  console.log(req.file);
  console.log("File Details > ", JSON.stringify(req.file));
  if (req.file) {
    try {
      // cloudinary pe upload karne wale hai
      //  cloudinary pe jo img upload hoti hai wo async me hoti hai
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill",
      });

      if (result) {
        // agar hum result mil jata hai to upper jo dummy data diya hai usko modify karenge as below
        user.avatar.public_id = (await result).public_id;
        user.avatar.secure_url = (await result).secure_url;

        // remove file from server
        fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (error) {
      return next(
        new AppError(error || "file not uploaded, please try again", 500)
      );
    }
  }

  await user.save(); //after uploading file we'll save again

  user.password = undefined;

  const token = await user.generateJWTToken(); // no need to import user.model.js as it is under user , and we have a instance of user here

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !user.comparePassword(password)) {
      return next(new AppError("Email or password does not match", 400));
    }

    // generate JWT token
    const token = await user.generatejwtToken();
    user.password = undefined; //user ke paas password na chala jaye
    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res) => {
  // best way iscookie delete kar do user automatically logout ho jayega
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    res.status(200).json({
      success: true,
      message: "user details",
      user,
    });
  } catch (error) {
    return next(new AppError("failed to fetch profile", 400));
  }
};

const forgotPassword = async (req, res, next) => {
  // humko email dena hoga
  const { email } = req.body;

  if (!email) {
    // agar email nahi diya hai
    return next(new AppError("Email is required", 400));
  }

  //agar email diya hai - db se validate karna hoga email exist karta hai ya nahi
  const user = await User.findOne({ email });
  //agar email nahi mila to error throw karenge
  if (!user) {
    return next(new AppError("Email not registered", 400));
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

  const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  console.log(resetPasswordURL);

  // url me token set kar ke send karte hai

  // hum resetToken ko path me de sakte hai jaise yaha, ya phir query param me bhi de sakte hai

  // ye url (i,e resetPasswordURL) khulega react application me - react application me ish token ko read karna hoga - ushko read karoge + option aayega email dalne ke liye in dono ka combination me send karna hoga

  // ye jo url generate hua hai isko email send karenge

  // email send karna hai
  const subject = "Reset Password";
  const message =
    'you can reset yourpasswordd by clicking <a href=${resetPasswordURL} target="_blank">Reset Your Password</a>\nif above link does not work for some reason then copy this link in new tab ${resetPasswordURL}.\n If you have not requested this, kindly ignore.';
  try {
    await sendEmail(email, subject, message);

    res.status(200).json({
      success: true,
      message: `reset password token has been sent to ${email} successfully`,
    });
  } catch (error) {
    // agar kisi wajah se email send nahi hua , email fat gaya to hum token and expiry ko undefined kar denge , security purpose se

    // aisa isliye karenge kyuki humne token db me already save kar diya hai but email send nahi ho paya  - so agar hum retry karna cahate hai to previous values ko undefined / reset i,e invalid kar denge taki koi confusion na ho retry karne pe

    // aisa isliye karenge kyuki hum nahi cahate ki 2 alag alag token generate ho , aur user purane wale email me jaye aur usko expire mile jab ki 15 min bhi nahi hue hai

    user.forgotPasswordToken = undefined;
    user.forgitPasswordExpiry = undefined;
    // undefined karne ke baad save kar do
    await user.save();

    return next(new AppError(error.message, 500));
  }
};

const resetPassword = async (req, res) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  const forgotPasswordToken = crypto
    .createHash("sha256")
    // .create('sha256')
    .update(resetToken) // we'll get this from resetToken
    .digest("hex");

  const user = await User.findOne({
    // validate karenge ki token exist karta hai ya nahi
    forgotPasswordToken,
    //validate karenge ki token expire to nahi hua hai na i,e expiry abhi se greater hai ya nahi
    forgotPasswordExpiry: { $gt: Date.now() },
    // basically hume wahi token nikalna hai jo token match karta hai aur jiski expiry future me ho
  });
  // agar aisa koi user nahi mila to
  if (!user) {
    return next(
      new AppError("Token is invalid or expired, please try again", 400)
    );
  }
  // agar hume db me user mil gaya -
  // new password banayenge
  user.password = password;

  // save karne se pehle user ka token and expiry usko bhi update karna hai - inka jo kaam tha wo ho gaya

  // hum karna kya cahate the - forgotPassword ka use kar ke inko update karna cahate the - so
  user.forgotPasswordToken = undefined;
  user.forgotPasswordExpiry = undefined;

  user.save();
  //  sab kaam successfully ho gaya to message bhej denge
  res.status(200).json({
    success: true,
    message: "password changed successfully",
  });

  // notice: security concern

  // agar kabhi hum password bhul jate hai tab ye yaad rakhna hai ki  - email me jo url aata hai wo kitna critical hai - kisi aur ko koi login ki zaroorat nahi hai , koi password ki zaroorat nahi hai - sirf ye url hone se koi bhi hamara password set kar sakta hai -
};
// console.log(crypto);

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;
  // auth.middleware me humne req.user ke andar user ki sari information rakhi hai

  if (!oldPassword || !newPassword) {
    return next(new AppError("All fields are mandatory", 400));
  }

  // db me ush id ke corresponding password nikal ke compare karte hai
  const user = await User.findById(id).select("+password");

  if (!user) {
    return next(new AppError("user does not exist", 400));
  }

  // agar user exist karta hai to password compare karenge
  const isPasswordValid = await user.comparePassword(oldPassword);

  if (!isPasswordValid) {
    return next(new AppError("Invalis old Password", 400));
  }
  // agar old password match kar jata hai
  user.password = newPassword;

  await user.save();

  user.password = undefined;
  // taki password mistake se leak na ho jaye

  res.status(200).json({
    success: true,
    message: "password changed successfully!",
  });
};

// fullname update kar do
// profile picture change kar sakte hai
// email abhi change nahi kar rahe wo complicated problem hai

const updateUser = async (req, res) => {
  const { fullName } = req.body;
  // body me mil jayega multer ki wajah se
  const { id } = req.user.id;

  // check karna hai ki koi user exist karta bhi hai ya nahi
  const user = await User.findById(id);
  //agar koi user exist nahi karta
  if (!user) {
    return next(new AppError("user does not exist", 400));
  }

  if (req.fullName) {
    // agar kisi ne fullname diya hai, aur agar user exist karta hai to fullname update kar denge
    user.fullName = fullName;
  }
  // kya user ne profile pic daali hai
  // kaise check karenge -
  // agar multer se pass hone pe req.file me hume wo file mil jayegi jo user ne update kiya hai
  if (req.file) {
    // already cloudinary me same public id pe ek image exist karti hai ,
    // to pehle ushe hatana hoga , tab hi dusri image upload kar payenge
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    // same as we did for register flow 
    try {
      // cloudinary pe upload karne wale hai
      //  cloudinary pe jo img upload hoti hai wo async me hoti hai
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill",
      });

      if (result) {
        // agar hum result mil jata hai to upper jo dummy data diya hai usko modify karenge as below
        user.avatar.public_id = (await result).public_id;
        user.avatar.secure_url = (await result).secure_url;

        // remove file from server
        fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (error) {
      return next(
        new AppError(error || "file not uploaded, please try again", 500)
      );
    }
  }

//    db me save karna hai 
await user.save();

// now we have successfully completed the process so we can send success message 
res.status(200).json({
    success: true,
    message: 'uset details updated successfully '
})


// jab hum ishe UI pe use karenge to ensure karenge ki
// naming convention yahi ho kyuki ho sakta hai ki react application me naming convention different ho- so accordingly update kar lenge   
};

export {
  register,
  login,
  logout,
  getProfile,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
};
