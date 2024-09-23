
const JWT = require("jsonwebtoken");


const jwtAuth = (req, res, next) => { 
    // token nikal lete hai 
    const token = (req.cookies && req.cookies.token) || null;
 
    if(!token){ // if token doesn't exists
        return res.status(400).json({
            success: false,
            message: 'Not Authorized'
        })
    }
    
    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email} 
        next();
    } catch (e) {
        // in case verify nahi hota hai to
        return res.status(400).json({
            success: false,
            message: e.message
        })
        
    }
} 

module.exports = jwtAuth;