import mongoose from "mongoose"

const productSchema = new mongoose.Schema ({
  description: {
    required: true,
    // array [] me order matter karta hai , object {} me order matter nahi karta
  type: String,
},
productImage: {
  // hum caahe to mongoDB ke andar store kar sakte hai images buffer format me , but rakhni nahi caHIye kyuki heavy kar dega db ko , aur db bana bhi bhi nahi hai ish purpose ke liye
  type: String,
},
price: {
  type: Number,
  default: 0,
},
inventory: {
  default: 0,
  ttype: Number,
},
// category ke liye ek dusra model refer karna hoga 
category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
  required: true,
},
owner: {
  type: mongoose.Schema.Type.ObjectId,
  ref: "User"
}

}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)