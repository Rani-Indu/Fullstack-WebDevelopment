User = require('../models/authModel'); 

exports.home = (req, res) => {
    res.send('Hii Indu!')
}




exports.signup = async(req, res, next) => {
    try {
        // Check if req.body exists
        if (!req.body) {
          return res.status(400).json({ success: false, message: 'Request body is missing' });
        }
    
        const { name, email } = req.body;
        
        // Further processing here
    
        res.status(200).json({
          success: true,
        });
    
    // try {
    //     const{name, email} = req.body
    //     res.status(200).json({
    //         success: true,
    //     })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        }) 
    }

}



