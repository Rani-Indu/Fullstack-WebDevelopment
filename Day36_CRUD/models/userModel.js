const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    
    { 
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxLength:[50, "Name should be less than 50 characters"]
        }, 

    
        email: {
            type: String,
            required: true,
            unique: true
            // unique emails only allowed
        }, 
        // if we uncomment this then we need to make changes in code and include uesrname while sending POST request and accordingly at various other places
        // username: {
        //     type: String,
        //     required: true,
        //     unique: true
        //     // unique username only allowed
        // },
        
    }
    
);

// export default mongoose.model("User", userSchema )

// const schema = new mongoose.Schema({ name: String, size: String });

module.exports = mongoose.model("User", userSchema)