const User = require('../models/userModel')

exports.home = (req, res) => {
    res.send('Hello World !!')}

    
exports.createUser = async(req, res) => {
    // extract info
    try {
        const {name, email} = req.body

        const user = await User.create({
            name,
            email
        })
        // await karne ke liye ek user create karna hoga database me
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
        })    
    } 
}