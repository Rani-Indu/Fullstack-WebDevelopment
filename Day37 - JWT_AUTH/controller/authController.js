const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");

// exports.home = (req, res) => {
//     res.send('Hii Indu!')
// }

// exports.signup = async(req, res, next) => {
//     try {
//         const { name, email } = req.body;
//         const user = await User.create({
//             name,
//             email
//         })

//         // Check if req.body exists
//         if (!name || !email) {
//             return res.status(400).json({
//               success: false,
//               message: 'name and email are required'});
//           }
//         // if (!req.body) {
//         //   return res.status(400).json({ success: false, message: 'Request body is missing' });
//         // }

//         // Further processing here

//         res.status(200).json({
//           success: true,
//         });

//     // try {
//     //     const{name, email} = req.body
//     //     res.status(200).json({
//     //         success: true,
//     //     })

//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message
//         })
//     }

// }

const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "every field is required",
    });
  }

  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "please provide a valid email id",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirm password doesn't match",
    });
  }

  try {
    const userInfo = userModel(req.body); //userModel(name used to access userSchema)
    // agar schema me and req.body me key name same nahi hai to hume yaha pe mention karna hoga like
    // const userInfo = userModel (
    // name: new key name e.g- username, etc
    // email: new email name e.g- useremail, etc
    // );
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      // data: {}
      data: result,
      // agar ye data store karte samay badhiya se store ho jata hai to , jo result hai usko as it is response me send kar dunga, data me result ko send kar denge
    });
  } catch (e) {
    if (e.code === 11000) {
      // same email ko dobara register karne ki kosish kar rahe hai tab
      // code for duplicate entry
      return res.status(400).json({
        success: false,
        message: "Account already exists with provided email id",
      });
    }
    return res.status(400).json({
      // agar data store nahi hua to error send karenge
      success: false,
      message: e.message,
    });
  }
};

const signin = async (req, res) => {
  // if in I/p there is no email or password
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "every field is mandatory",
    });
  }

  try {
    
      const user = await userModel.findOne({ email }).select("+password");
      // for signin we need to check whether email already exists or not
    
      // select('+password') - ush user me bahot sari chize defined hai but humko sab information nahi caahiye , kuch selected information hi caahiye like password
    
      // in db find if email exists and if yes then give password for that email
    
    
    
    
    
      // email id exist karti hai ya nahi
      // kya provided password hamare req.body me jo password hai ushse match karti hai ya nahi
    
      // password ko encrypt kar ke send karna hoga
      if (!user || user.password !== password) {
        return res.status(400).json({
          success: false,
          message: "invalid credentials",
        });
      }
      //  upto here - mera username password sahi tha
      // ab ek token generate kar dena hai
      
      const token = user.jwtToken(); // user ke through jwt token mil gaya
      user.password = undefined // ish token me ek chiz ensure karni hai ki mere pass jo password hai wo leak nahi hona cahiye so password ko null set kar do
      
      // ab hume cookie banani hai , token to generate ho gaya
      // cookie me rakhne ke liye kuch chize hoti hai
      const cookieOption = {
          // cookie 24hr ke liye valid rahe , ms(millisecond) me generate karenge
          maxAge: 24*60*60*1000, // 24hr
          httpOnly: true // for security purpose, client side se , js se hum ishe access nahi kar sakte
      }
      
      // ye configuration de diya ab ishke response me cookie set karni hai, naam hai cookie ka "token", cookie ki value ke liye 3 option hote hai token - jo mera actual token hai , and uske options cookieOption, option is optional
      
      res.cookie("token", token, cookieOption)
      res.status(200).json({
          success: true,
          data: user // humne password ko pehle hi null kar diya hai taki hum client ko password na bhej de
      })
    } catch (error) {
    res.status(400).json({
        success: false,
          message: e.message
    })
    
  }

    module.exports = {
      signup,
      signin,
    };

}