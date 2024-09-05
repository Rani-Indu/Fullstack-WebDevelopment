User = require("../models/userModel");

exports.home = (req, res) => {
    res.send('Hello World!')
  }

  exports.createUser = async(req, res) => {
    //extract info
    try {
        const {name, email} = req.body
        const user = await User.create({
          name,
          email

        })
        
    } catch (error) {
        
    }
  }