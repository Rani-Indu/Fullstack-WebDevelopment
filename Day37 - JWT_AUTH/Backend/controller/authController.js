exports.signup = async(req, res, next) => {
        const {name, email, password, confirmPasswoed } = req.body;
        console.log(name, email, password, confirmPasswoed );
        return res.status(200).json({
            success: true,
            data: {}
        })
    
}