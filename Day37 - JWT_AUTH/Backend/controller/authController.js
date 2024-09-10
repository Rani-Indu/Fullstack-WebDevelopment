exports.signup = async(req, res, next) => {
    try {
        const{name, email, password, confirmPassword} = req.body;
        console.log(name, email, password, confirmPassword);
        
    res.status(200).json({
        success: true,
        data: {}
    })
        
    } catch (error) {
        console.log(error);
		res.status(400).json({
			success: false,
			message: error.message,
		})	
        
    }
    
}