import {Schema, model} from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const userSchema  = new Schema({
    fullName: {
        type: 'String',
        required: [true, 'Name is requiredmust be atleast 5 character'],
        maxLength: [50, 'Name should be less than 50 character']
    },
    email: {
        type: 'String',
        required: [true, 'Email is required'],
        lowercase: true,
        unique: true,
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill in a valid email address' ]
        
    },
    password: {
        type: 'String',
        required: [true,'Password is required'],
        minLength: [8, 'Password must be atleast 8 character'],
        select: false // by this password will display only when we ask for it explicitly
    },
    avatar: {
        public_id: {
            type: 'String'
        },
        secure_url: {
            type: 'String'
        }
    },
    // we can use same platform/API for any kind of user by setting up appropriate "authorization"
    role: {
        type: 'String',
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    forgotPasswordToken: String,
    forgitPasswordExpiry: Date
}, {
    timestamps: true
}
);

userSchema.pre("save", async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})  

userSchema.methods = {
    generateJWTToken: async function() {
        return await jwt.sign(
            {id: this._id, email: this.email, subscription: this.subscription, role: this.role},
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY,
            }
        )
        
    },
    // hum compare karna cahte hai jo plain text password humne diya hai and jo encrypted password hai db me 
    
    comparePassword: async function(plainTextPassword) {
        return await bcrypt.compare(plainTextPassword, this.password)
        // bcrypt async hota hai so use async await 
    },

    generatePasswordResetToken: async function() { 
        const resetToken = crypto.randomBytes(20).toString('hex');

        // db me store karna cahate hai 
        // humne model me kuch chize define ki thi i,e token and expiry unko set kar lete hai 

        this.forgotPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex')
        ;
        //hum yaha pe upper se resetToken direct daal sakte hai but better if we encrypt it 
        //token ko encrypt karenge using crypto 
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000; // 15 min from now 

        return resetToken
        // user ko jo url me bhejna hai wo encrypted nahi bhejna hai so we'll send resetToken
    }
}



const User = model('User', userSchema) // db me collection ka naam hai User





export default User;