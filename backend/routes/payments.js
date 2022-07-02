const Razorpay = require("razorpay");
const express = require('express');
const router = express.Router();

const RAZORPAY_KEY = "rzp_test_DJBG3pNEbw0AYg";
const RAZORPAY_SECRET = "6dspJ11vdoaCyyWnkxTgdcOP";

async function handler(req, res) {
    if (req.method === "POST") {
        const razorpay = new Razorpay({
            key_id: RAZORPAY_KEY,
            key_secret: RAZORPAY_SECRET,
        });
        const payment_capture = 1;
        const amount = req.body.amount;
        const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: req.body.orderId,
            payment_capture,
        };

        try {
            const response = await razorpay.orders.create(options);
            res.status(200).json({
                id: response.id,
                currency: response.currency,
                amount: response.amount,
            });
        } catch (err) {

            res.status(400).json(err);
        }
    }
}

router.post('/razorpay', handler);

module.exports = router;
