const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minLength: [4, "name must be at least characters"],
      maxLength: [50, "name must be less than 50 character"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "already registered"], // if email entered is not unique then we'll get this errort
      lowercase: true,
    },
    // hum dekh sakte hai ki kitna powerful hai mongoose, humne user me kuch aur data diya hai , hum ush data ko sanetize kar ke, better tarike se store karna cahate hai db me, automatically mongoose hume ye karne me help kar raha hai
    password: {
      type: String,
      select: false,
    },
    // password will expire after sometime
    forgotPasswordToken: {
        type: String
    },
    // expiry duration
    forgotPasswordExpiryDate: {
        type: Date
    }
  },
  { timestamps: true }
);

// mongoose allow karta hai schema me koi custom method define karne ko
// yaha pe hum jwt token generate karne ka method likhte hai
userSchema.methods = {
  jwtToken() {
    // jwt ke through hum ek signature banane ki kosish karte hai, jwt.sign() method ke through, jisme 3 part honge
    return JWT.sign(
        // part 1 - data
        {id: this._id, email: this.email},
        process.env.SECRET,
        {expiresIn: '24h'} // token expires in 24 hours
    );
  },
};

module.exports = mongoose.model("user", userSchema);
