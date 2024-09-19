// hum jwt ke through play karenge so import jwt
const JWT = require("jsonwebtoken");

// ek middleware banana hai 
// middleware kya hai - special kuch nahi hai ek module ki tarah hai
const jwtAuth = (req, res, next) => {
    // next - it is very important in every middleware , agar next nahi denge to hum next step, next function pe nahi ja payenge yahi pe hi ghumte rahenge
} 