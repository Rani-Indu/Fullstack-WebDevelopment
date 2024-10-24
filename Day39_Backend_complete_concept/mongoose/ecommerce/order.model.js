import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  // pura product ka detail save karne ki zaroorat nahi hai , product id se ref kar sakte hai
  // jitna bhi hum schema banate hai har ek individual product ka ek unique id generate hota hai  mongoDB apne aap karta hai, hum ye id generate nahi karte hai
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity,
});

const oederSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      // kaun kaun se order item hai , kitne items hai - ye difficult hai - iske liye hume ek aur schema banana hoga i,e orderItemSchema
      //  main issue is quantity kaise store kare
      // orderItemSchema - hum ish schema ko kahi aur use nahi karne wale ishliye yaha pe hi bana diya , agar ek se jyada jagah use ho to hum ishe alag file me bhi bana sakte hai
      type: [orderItemSchema],
      // OR
      // we can define it as below also
      // type: [
      //   {
      //     productId:
      //   }
      // ]
      address: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        // enumerations, enum matlab choices
        enum: ['PENDING', 'CANCELLED', 'DELIVERED'],
        default: 'PENDING',
      },
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', oederSchema);
