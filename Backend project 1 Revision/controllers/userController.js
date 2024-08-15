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

exports.deleteUser = async(req, res) => {
	try {
		// url se data kaise lenge 
		// same as in body - req.body , here req.params
		// req.params.id - hold it in a variable userId
		// ab hamare paas ush user ki id hai so ab ush id ko find karenge and delete karenge
		const userId = req.params.id
		// db is in another continent so await 
		// super power User ke paas hai 
		// sare methods bhi User ke hi paas hai
		// kyuki humne yaha pe parameters ke andar id lenge so router ko bhi batana hoga ki hum parameters se id lenge 
		await User.findByIdAndDelete(userId)
		res.status(200).json({
			success: true,
			message: "user deleted successfully"	
		})
		
	} catch (error) {
		console.log(error);
		res.status(400).json({
			success: false,
			message: error.message,
		})	
	}
}
