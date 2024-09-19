// hum jwt ke through play karenge so import jwt
const JWT = require("jsonwebtoken");

// ek middleware banana hai 
// middleware kya hai - special kuch nahi hai ek module ki tarah hai
// next - it is very important in every middleware , agar next nahi denge to hum next step, next process, pe nahi ja payenge isi middleware me ghumte rahenge
const jwtAuth = (req, res, next) => { 
    // token nikal lete hai 
    const token = required(req.cookies && req.cookies.token) || null;
    if(!token){ // if token doesn't exists
        return res.status(400).json({
            success: false,
            message: 'Not Authorized'
        })
    }
    // agar token exists karta hai to ushse information nikalni hogi, validate karna hoga ki token sahi hai ya nahi , agar sahi hai to hum information nikalenge aur aage bhej denge
    try {
        // jo payload aaya hai usko nikalne ki kosish karenge
        // kaise - payload generate karenge JWT se, token ko verify karna hai , kiske corresponding - humne secret key use ki thi jab token generate kiya tha, userSchema me (process.env.SECRET), ish secret ke through check kar lo ki JWT valid hai ya nahi, agar valid hai to payload me uski information mil jayegi, payload me hume - id , email mil jayegi jo humne rakha tha token me, agar ye valid hai ti iske user information request me mai sari information ko set kar ke bhej du
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = { id: payload.id, email: payload.email} // ye humne kiya kyu hai - isliye kyuki humko pata hai ki hamare token me user information exist karti hai jisme id and email hai - to wo jo information hai usko request me set kar dete hai tab , jab ye aage badhega i,e jab ye middleware jwtAuth se jayega getUser me
        
    } catch (error) {
        
    }
    next();
} 

module.exports = jwtAuth;