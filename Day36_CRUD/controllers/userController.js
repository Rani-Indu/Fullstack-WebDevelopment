const User = require('../models/userModel')

exports.home = (req, res) => {
    res.send('Hello World !!')}

    
exports.createUser = async(req, res) => {
    // extract info
    try {
        const {name, email} = req.body
        // const {name, email, username, password, age} = req.body

        if(!name || !email){
            throw new Error("Name and email are required")
        }

        const userExists = await User.findOne({email})
        if(userExists){
            throw new Error("User already exists")
        }

        const user = await User.create({
            name,
            email
            // username,
            // password,
            // age
        })
        // await karne ke liye ek user create karna hoga database me
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "error.message",
        })    
    } 
}

exports.getUsers = async(req, res) => {
    try{
        // await User.find({email})  // previous example
        const users = await User.find({})  // no condition mentioned , so all data needed
        res.status(200).json({
            success: true,
            message: "process successful",
            users
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "process failed"
        })
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "process failed"
        })
        
    }
}


xports.editUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)
        ress.status(200).json({
            success: true,
            message: "User updated successfully"
        })
       
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "process failed"
        })
        
    }
}