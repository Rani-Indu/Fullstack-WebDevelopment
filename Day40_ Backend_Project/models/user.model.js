// import mongoose from "mongoose"
// const userSchema = new MongooseError.Schema({}, {timestamps: true})

// OR 

import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: { // check model image for required fields 
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true // when we want to make information easily searchable 
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url 
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url 
        },
        watchHistory: [
            {
                // type: Schema.Types.ObjectId,
                type: mongoose.Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,  
        },

    }, {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 10)  
}
)
 
userSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password, this.password)
}