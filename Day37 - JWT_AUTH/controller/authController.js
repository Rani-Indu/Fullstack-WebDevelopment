exports.signup = (req, res) => {
    try {
        const{name, email} = req.body
        res.status(200).json({
            success: true,
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
        
        
    }

}