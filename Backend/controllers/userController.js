User = require("../models/userModel");

exports.home = (req, res) => {
    res.send('Hello World!')
  }

  exports.createUser = async(req, res) => {
    //extract info
    try {
      // db is in another continent, superpower kaha se milegi - User se , ushse hum query puch sakte hai
        const {name, email} = req.body
        const user = await User.create({
          name,
          email
        })
        res.status(201).json({
          success: true,
          message: "User created successfully",
          user
        })
        
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }


  exports.getUser = async(req, res) => {
    try {
      // db is in another continent, 
      // User - superpower kaha se milegi - User se , ushse hum query puch sakte hai
      const user = await User.find({});

      // Check if the users array is empty
    if (user.length === 0) {         // user is array 
      return res.status(404).json({
        success: false,
        message: "No users found"
      });
    }

      res.status(201).json({
        success: true,
        user
      })
      
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }
  
  exports.deleteUser = async(req, res) => {
    try {
      const userId = req.params.id
      await User.findByIdAndDelete(userId)
      res.status(200).json({
        success: true,
        message: "user deleted successfully"
      })
      
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      })
      
    }
  }
  
  
  exports.editUser = async(req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({
        success: true,
        message: "User updated successfully"
    })
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  }