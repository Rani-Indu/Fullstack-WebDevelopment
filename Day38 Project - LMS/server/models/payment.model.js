import { model, Schema} from 'mongoose';


const paymentSchema = new Schema({
    payment_id: {
        type: String,
        required: true
    },
    subscription_id: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});



const Payment = model('payment', paymentSchema);

export default Payment;