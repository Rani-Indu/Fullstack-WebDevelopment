
// hum jwt ke through play karenge so import jwt
const JWT = require("jsonwebtoken");

// ek middleware banana hai 
// middleware kya hai - special kuch nahi hai ek module ki tarah hai
// next - it is very important in every middleware , agar next nahi denge to hum next step, next process, pe nahi ja payenge isi middleware me ghumte rahenge
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
        // agar token exists karta hai to ushse information nikalni hogi, validate karna hoga ki token sahi hai ya nahi , agar sahi hai to hum information nikalenge aur aage bhej denge
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

    next();
} 


module.exports = jwtAuth;

