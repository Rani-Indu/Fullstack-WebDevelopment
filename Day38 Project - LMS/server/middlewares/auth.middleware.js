import jwt from 'jsonwebtoken'
import AppError from '../utils/error.util';


const isLoggedIn = async(req, res, next) => {
    const {token} = req.cookies; 
    
    if (!token) { 
        return next(new AppError("unauthenticated", 400));
    }

    const userDetails = await jwt.verify(token, process.env.JWT_SECRET) 

    req.user = userDetails;

    next();
}


const authorizedRoles = (...roles) => async (req, res, ) => {
    const currentUserRoles = req.user.role;
    if (!roles.includes(currentUserRoles)) {
        return next(
            new AppError('you do not have permission to access this course ')
        )
    }
}

export{
    isLoggedIn,
    authorizedRoles
}