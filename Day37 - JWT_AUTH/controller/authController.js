const userModel = require('../models/userSchema'); 
const emailValidator = require('email-validator');

// exports.home = (req, res) => {
//     res.send('Hii Indu!')
// }

// exports.signup = async(req, res, next) => {
//     try {
//         const { name, email } = req.body;
//         const user = await User.create({
//             name,
//             email
//         })

//         // Check if req.body exists
//         if (!name || !email) {
//             return res.status(400).json({ 
//               success: false, 
//               message: 'name and email are required'});
//           }
//         // if (!req.body) {
//         //   return res.status(400).json({ success: false, message: 'Request body is missing' });
//         // }
    
        
//         // Further processing here
    
//         res.status(200).json({
//           success: true,
//         });
    
//     // try {
//     //     const{name, email} = req.body
//     //     res.status(200).json({
//     //         success: true,
//     //     })
        
//     } catch (error) {
//         console.log(error);
//         res.status(400).json({
//             success: false,
//             message: error.message
//         }) 
//     }

// }

const signup = async(req, res, next) => {
    const{name, email, password, confirmPassword} = req.body;
    console.log(name, email, password, confirmPassword);

    if (!name || !email || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'every field is required'
        });
    }

    const validEmail = emailValidator.validate(email);
    if(!validEmail) {
        return res.status(400).json({ 
            success: false, 
            message: 'please provide a valid email id'
        });
    }

    if (password !== confirmPassword){
        return res.status(400).json({
            success: false,
            message: "password and confirm password doesn't match"
        })
    }

    try {
        const userInfo = userModel (req.body); //userModel - name used to access userSchema
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            // data: {}
            data: result
            // agar ye data store karte samay badhiya se store ho jata hai to , jo result hai usko as it is response me send kar dunga, data me result ko send kar denge
        })  
    } catch (e) {
        if (e.code === 11000) {// same email ko dobara register karne ki kosish kar rahe hai tab
            // code for duplicate entry
            return res.status(400).json({
                success: false,
                message: 'Account already exists'
            })
        }
        return res.status(400).json({ // agar data store nahi hua to error send karenge
            success: false,
            message: e.message
        })
        
    }

    
}


module.exports = {
    signup
}
