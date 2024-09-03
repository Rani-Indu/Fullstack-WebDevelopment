const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    name: {
		type: String,
		required: [true, 'name is required'],
		trim: true,
		maxLength: [50, 'name must be less than 50 char'],
	},
	email: {
		type: String,
		required: [true, 'email is required'],
		unique: true,
	} 
});

module.exports = mongoose.model("User", userSchema);