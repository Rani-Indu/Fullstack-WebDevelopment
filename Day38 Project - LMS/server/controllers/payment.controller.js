import AppError from "../utils/error.util.js";
import { razorpay } from '../server.js'
// to get razopay dependency here we can define it in server.js
import crypto from 'crypto';


export const getRazorpayApiKey = async(req, res, next) => {
    try {
        res.status(200).json({
            success: true,
            message: 'Razorpay API Key',
            key: process.env.RAZORPAY_KEY_ID
            // key from .env file
            // agar hum hit karte hai , loggedIn hai to razorpay ki key return kar dega
        });
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )     
    }
};


export const buySubscription = async(req, res, next) => {
    try {
        const { id } = req.user; // id ke corresponding kuch chize dekh lete hai
        // check karenge ki db me user exist karta hai
        const  user = await UserActivation.findById(id);
    
        if(!user) {// agar userexist nahi karta hai 
            return next(
                new AppError('unauthorized, please login')
                // waise middleware me humne ye error already handle kiya hai , but koi chance nahi lena cahate, i,e isLoggedIn , plz check ?  
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
            // ye subscription ki unique id generate kar dega 
        })
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )
        
    }

};
// jaise hi upi  pin dalenge, payment hone pe  status Active ho jayega 
// active hone ke baad hum verify karte hai 

// to check ki payment hua ya nahi 

//  verification karte samay hume client se jo data milne wala hai wo hai - 
// razorpay_subscription.id, 
// razorpay_payment.id , 
// razorpay_signature


// subscription plan hamara sabhi ke liye same hone wala hai - i,e 1 yr subs pe dashboard ke sare course access kar sakte hai 

// we can try making different subscription plans ex- hotstar

// jab razorpay se redirect jo ke ek post request aati hai client pe jispe hume verify karna hai , ushpe payment_id, signature, subscription_id mila

// 1st - check user exist karta hai ya nahi , karta hai to subscription id nikal lo, jo ki actually me razorpay se jo subscription id aa raha hai wahi wala id hoga  

// 2nd - ye check karne ke liye ki payment successful hua tha ya nahi humko razorpay_signature ko compare karna hai khud ka signature generate kar ke 

// agar payment ho gaya to record bana dena hai 

// user level pe status set kar dena hai 
export const verifySubscription = async(req, res, next) => {
    try {
        const { id } = req.user;
        const { razorpay_payment_id, razorpay_signature, razorpay_subscription_id } = req.body;
    
        // ab pata karna hai ki payment hua ya nahi hua , signature se details nikalni hai 
    
        // first check karenge ki user exist karta hai ya nahi 
    
        const user = await User.findById(id);
        // ADMIN hai ya nahi ye check karne ki zarueat nahi hai kyuki verify kar rahe hai , koi naya subscription nahi bana rahe
    
        // ADMIN ho koi bhi ho - koi fark nahi padta - hum verify kar lenge 
        if(!user) {
            return next(
                new AppError('unauthorized, please login')
            )
        }
    
    // user exist karta hai , thik hai user ke andar subscription ki detail save kar di thi , to subscription ki id kaha se milegi - user se mil sakti hai 
        const subscriptionId = user.subscription.id;
    
        // kuch chizo ka use karte hue hume verification karna hai , ek signature generate karna hai jishse pata chale ki kya ye user valid hai , nahi hai , payment  hua hai ya nahi ye check karne ke liye kuch kaam karna hoga 
    
        const generatedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_SECRET)
        .update('${razorpay_payment_id}|${subscriptionId}')
        .digest('hex');
    
        // generated signature secret key ke through i,e generatedSignature aur jo signature post data me tha i,e razorpay_signature agar match nahi karta to error throw kar do 
         
        if (generatedSignature !== razorpay_signature) {
            return next(
                new AppError('payment not verified, please try again', 500)
            )
        }
        // agar payment ho jata hai to entry create kar deni hai apne payment wale collection me 
        await Payment.create({
            razorpay_signature,
            razorpay_payment_id,
        });
        // user level pe payment ka status created hai usko active mark karna hai 
        user.subscription.status = 'active';
        await user.save();
        
        res.status(200).json({
            success: true,
            message: 'Payment verified successfully '
        })
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )  
    }
};


export const cancelSubscription = async(req, res, next) => { 
    try {
        // user ki id req.user se 
        const { id } = req.user;
    
        // user level pe check karna hai ki kya ye user exist karta hai 
        const user = await User.findById(id) //user ki information pata chal jayega
    
        if(!user) {
            return next(
                new AppError('unauthorized, please login')  
            )
        }
        
        if (user.role === 'ADMIN') {
            return next(
                new AppError(
                    'not allowed', 400
                )
            )
        }
        // agar user exist karta hai to hume subscription id nikalni hogi kyuki bina subs id ke subs cancel nahi kar sakte
        const subscriptionId = user.subscription.id;
    
        // subs ko cancel karna hai 
        // kaise karenge - subs ka instance bana lete hai, jo ki razorpay ka instance hai 
        const subscription = await razorpay.subscriptions.cancel(subscriptionId)
    
    
        //  subscription cancel ho gaya to user level pe bji to status set karna hai , entry karni hogi , humne ushe active kiya tha wapas created me change karna hai 
        user.subscription.status = subscription.status;
    
        await user.save();
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )
        
    }
};


export const allPayment = async(req, res, next) => {
    try {
        const { count} = req.query;

        const subscriptions = await razorpay.subscriptions.all({
            count: count || 10,
        });

        res.status(200).json({
            success: true,
            message: 'all payments',
            subscriptions
        })
        
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )    
    }

    // H.W - payment ko represent kaise karna hai in form hi table , pie chart
};

// agar payment nahi kiya hai to course ki listing nahi dekh sakte - we can do this using middleware 

