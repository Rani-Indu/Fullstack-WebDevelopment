const signup = (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    console.log(name, email, password, confirmPassword );
    console.log("Request Body: ", req.body);
    return res.status(200).json({
        success: true,
        data: {}
    })

};

module.exports = {
    // signup
};