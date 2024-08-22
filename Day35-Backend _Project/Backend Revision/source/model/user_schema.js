//  schema is for db
//library being used for db is mongoose
import mongoose from "mongoose";
// from documentation
// const schema = new mongoose.Schema({ name: String, size: String });

// aise kaam nahi karega , schema ka naam dena hoga , aur mongoose help karega schema design karne me
const UserSchema = new mongoose.Schema(
	{ 
		name: {
			type: String,
			required: [true, 'Name is required'],
			// required: [true, 'error we want to display']
			// Name is required = defining customized error
			maxLength: [50, "name should be less than 50 characters"]
	
		},
		email: {
            type: String,
            unique: true
            // unique emails only allowed
        }, 
        
        username: {
            type: String,
            unique: true
            // unique username only allowed
        },
		email: String, 
		password: String, 
		age: Number, 
	}
	// }, {timestamps: true}
	);

export default module.mongoose("user", UserSchema);