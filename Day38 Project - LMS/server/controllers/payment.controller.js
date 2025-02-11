import AppError from "../utils/error.util.js";
import razorpay from '';
// to get razopay dependency here we can define it in server.js


export const getRazorpayApiKey = async(req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Razorpay API Key',
        key: process.env.RAZORPAY_KEY_ID
        // key from .env file
        // agar hum hit karte hai , loggedIn hai to razorpay ki key return kar dega
    });
};


export const buySubscription = async(req, res, next) => {
    const { id } = req.user; // id ke corresponding kuch chize dekh lete hai
    // check karenge ki db me user exist karta hai
    const  user = await UserActivation.findById(id);

    if(!user) {// agar userexist nahi karta hai 
        return next(
            new AppError('unauthorized, please login')
            // waise middleware me humne ye error already handle kiya hai , but koi chance nahi lena cahate, isLoggedIn ?  
        )
    }

    // if user is valid - check role - if admin than throw error - kyuki admin ko subscription ki zaroorat nahi hai , it has access to entire dashboard , to subscription related kuch bhi kare ga to error de denge 
    if (user.role === 'ADMIN') {
        return next(
            new AppError(
                'Admin cannot purchase a subscription', 400
            )
        )
    }

    // agar user Admin nahi hai - rezorpay me jana hai subscription create karna hai  - kyuki tabhi to hum payment gateway pe redirect karenge 

    const subscription = await razorpay
    // yaha hume cahiye Razorpay jo server me banaya hai 

};


export const verifySubscription = async(req, res, next) => {};


export const cancelSubscription = async(req, res, next) => {};


export const allPayment = async(req, res, next) => {};

