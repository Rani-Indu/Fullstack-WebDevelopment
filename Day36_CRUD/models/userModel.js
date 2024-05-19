const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    // { 
    //     name: String, 
    //     size: String, 
    //     email: String, 
    //     password: String,
    //     age: number, 
    // }
    { 
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxLength:[50, "Name should be less than 50 characters"]
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
        password: String,
        age: number, 
        
    }
    
);

// export default mongoose.model("User", userSchema )

// const schema = new mongoose.Schema({ name: String, size: String });

module.exports = mongoose.model("User", userSchema)