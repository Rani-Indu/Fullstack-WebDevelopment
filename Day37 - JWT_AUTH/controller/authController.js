const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");



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
    user.password = undefined; // ish token me ek chiz ensure karni hai ki mere pass jo password hai wo leak nahi hona cahiye so password ko null set kar do

    // ab hume cookie banani hai , token to generate ho gaya
    // cookie me rakhne ke liye kuch chize hoti hai
    const cookieOption = {
      // cookie 24hr ke liye valid rahe , ms(millisecond) me generate karenge
      maxAge: 24 * 60 * 60 * 1000, // 24hr
      httpOnly: true, // for security purpose, client side se , js se hum ishe access nahi kar sakte
    };

    // ye configuration de diya ab ishke response me cookie set karni hai, naam hai cookie ka "token", cookie ki value ke liye 3 option hote hai token - jo mera actual token hai , and uske options cookieOption, option is optional, koi read na kar sake client side se isliye httpOnly diya hai 8

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user, // humne password ko pehle hi null kar diya hai taki hum wapas se client ko password na bhej de
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message,
    });
  }
};


const getUser = async(req, res) => {
  // user information ke liye hume user id cahiye taki uske corresponding hum db me ja kar query kar sake 
  const userId = req.user.id; 
  //  1. hum user se har baar user id to mange ge nahi, kyuki already loggedin hu to cookie me information available hai to har baar information mangne ka sense hi nahi hai   
  //  2. ye kaise validate kare ki already logged in hai ya nahi , yani kya hamare pass valid token hai 

  // hum aconside karte hai ki hum already logged in hai aur hamare pass valid token hai - to db me query kar ke kaise information layenge dekhte hai 
  try {
    const user = await userModel.findById(userId);
    // humne db se user ki sari information request ki hai yani password bhi aayega , but hum nahi cahte ki password reveal ho , iske liye humne schema me pehle se 
    // password: {
    //   type: String,
    //   select: false,  
     // ishse agar koi password nahi mang raha hai to password nahi milega ,
     // },
    //  jaha hume password cahiye waha hum aise le sakte hai 
    // const user = await userModel.findOne({ email }).select("+password");
    return res.status(200).json({
      success: true,
      data: user
    })
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: e.message
    })
    
  }
}

// userController me 
// 1. user ki information kaun dega
// 2. validate kaun karega user logged in hai ya nahi 
// uske liye hum banayenge middleware
// middleware kis liye kaam aayega- humne login karne pe jo token generate kiya tha, jwt token ke through jaha pe humne id and email rakhi thi in schema 
// return JWT.sign(
        // part 1 - data
        // {id: this._id, email: this.email},
        // ye informatio stored hai client side pe token me 
        // kya hum ush token ko decrypt kar ke id nikal le aur request me daal le to hamara kaam ho jayega - yes, ho jayega

const logout = () => {
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: true
    };
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "logged out"
    })
    
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
    
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  logout
};
