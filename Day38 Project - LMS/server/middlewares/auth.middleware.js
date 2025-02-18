import jwt from 'jsonwebtoken'
import AppError from '../utils/error.util.js';


const isLoggedIn = async(req, res, next) => {
    const {token} = req.cookies; 
    
    if (!token) { 
        return next(new AppError("unauthenticated", 400));
    }

    const userDetails = await jwt.verify(token, process.env.JWT_SECRET) 

    req.user = userDetails;

    next();
}



// jaha bhi use karo , mujhe pehle roles bata do
const authorizedRoles = (...roles) => async(req, res, next) => {
    const currentUserRoles = req.user.role;
    if (!roles.includes(currentUserRoles)) {
        return next(
            new AppError('you do not have permission to access this course ')
        )
    }
    next();
}


const authorizeSubscriber = (req, res, next) => {
    // subscription ka status kaha se milta hai - agar loggedIn user hai to ye information humko token ke andar milti hai jo ki cookie ke andar exist karta hai , notice kare ki jis tarah user level pe role store kiya tha - req.user.role (authorizedRoles me )- ushi tarah subscription status bhi store kiya hai 
    const subscription = req.user.subscription;
    const currentUserRole = req.user.role;
    if(currentUserRole !== 'ADMIN' && subscription.status !== 'active'){ // admin nahi hai aur subscription bhi nahi hai 
        return next (
            new AppError('please subscribe to access this route', 403)
        )
    }
};

export{
    isLoggedIn,
    authorizedRoles
}