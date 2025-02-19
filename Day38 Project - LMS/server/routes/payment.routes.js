import { Router } from 'express';
import { authorizedRoles, isLoggedIn, authorizeSubscriber } from '../middlewares/auth.middleware.js';
import{ getRazorpayApiKey, buySubscription, verifySubscription, cancelSubscription, allPayment } from '../controllers/payment.controller.js'

const router = Router();

router
.route('/razorpay-key')
.get(
    isLoggedIn,
    getRazorpayApiKey
);

router
.route('/subscribe')
.post(
    isLoggedIn,
    buySubscription
);

router
.route('/verify')
.post(
    isLoggedIn,
    verifySubscription
);

router
.route('/unsubscribe')
.post(
    isLoggedIn,
    cancelSubscription
);

router
.route('/')
.get(
    isLoggedIn,
    authorizedRoles('ADMIN'),
    // sare payment ke details sirf admin dekh sakta hai , normal user nahi dekh sakta
    allPayment
);


export default router;