import { Router } from 'express';

const router = Router();

router
.route('/razorpay-key')
.get(getRazorpayApiKey);

router
.route('/subscribe')
.post(buySubscription);

router
.route('/verify')
.post(verifySubscription)

router
.route('/unsubscribe')
.post(cancelSubscription)

router
.route('/')
.get(allPayment)


export default router;