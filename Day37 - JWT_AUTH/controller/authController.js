User = require('../models/authModel'); 

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

    try {
        
    } catch (error) {
        
    }

    // return res.status(200).json({
    //     success: true,
    //     data: result
    // })
    
}

