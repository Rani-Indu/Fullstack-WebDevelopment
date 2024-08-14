const User = require('../models/userModel.js')


exports.home = (req, res) => {
	res.send('Hii Indu!')
}

exports.createUser = async(req, res) => {
	// extract info
	try {
		const{name, email} = req.body
		// if name and email doesn't exist
		if(!name || !email){
			throw new Error("name and email are required")
		}
		// if user already exist with that email

        // finding user on the basis of email by creating an object
		const userExists = await User.findone({email})
		if(userExists){
			throw new Error("user already exists")
		}

		const user = await User.create({
			name,
			email
		})

		res.status(201).json({
			success: true,
			message: "User created successfully",
			user,
		})

	} catch (error) {
		console.log(error);
		res.status(400).json({
			success: false,
			message: error.message,
			// user nahi hai isliye user nahi bhej sakte
		})		
	}
}


exports.getUsers = async(req, res) => {
	// try{
	// 	// const users = await user.find({name}) // search on basis of name
	// 	// const users = await user.find({email}) // search on basis of email
	// 	const users = await User.find({})  // no condition is mentioned so all users are required
	// }
	try {
		const users = await User.find({})
		res.status(200).json({
			success: true,
			users
		})	
	} catch (error) {
		console.log(error);
		res.status(400).json({
			success: false,
			message: error.message,
		})	
	}
} 