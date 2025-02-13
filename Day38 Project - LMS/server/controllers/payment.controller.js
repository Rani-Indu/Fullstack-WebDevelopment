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

    // yaha hume cahiye Razorpay jo server me banaya hai 
    const subscription = await razorpay.subscriptions.create({
        plan_id: process.env.RAZORPAY_PLAN_ID,
        // ish plan id ke corresponding hum har baar  jab load karenge ek naya url generate karte hai , ek naya subscription id generate hota hai jiske corresponding hamara payment hota hai   
        customer_notify: 1
        // jaise hi subscription bane customer ke paas notification chala jaye ki subscription ban gaya hai agar payment karna hai to kar lo 
    })

    // ab subscription ban gaya hai to ish information ko store kar lete hai 
    //  ishe user level par store karenge
    user.subscription.id = subscription.id;
    user.subscription.status = subscription.status;

    await user.save();

    res.status(200).json({
        success: true,
        message: 'subscribed successfully',
        subscription_id: subscription.id
        // hume cahiye subscription id jo client side pe sdk ko cahiye , jaha se wo payment ke liye redirect karega  
    })
    // ye subscription ki unique id generate kar dega 

};
// jaise hi upi  pin dalenge status Active ho jayega 
// active hone ke baad hum verify karte hai 

// to check ki payment hua ya nahi 

//  verification karte samay hume client se jo data milne wala hai wo hai - 
// razorpay_subscription.id, 
// razorpay_payment.id , 
// razorpay_signature

export const verifySubscription = async(req, res, next) => {
    const { id } = req.user;
    const { razorpay_payment_id, razorpay_signature, razorpay_subscription_id } = req.body;
};


export const cancelSubscription = async(req, res, next) => {};


export const allPayment = async(req, res, next) => {};

