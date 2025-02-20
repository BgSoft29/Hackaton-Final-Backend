const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const Payment = require('../models/paymentModel');

const createPaymentIntent = async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const confirmPayment = async (req, res) => {
    const { paymentIntentId } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {
            const payment = new Payment({
                user: req.user._id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                paymentIntentId: paymentIntent.id,
                status: paymentIntent.status,
            });

            const savedPayment = await payment.save();

            res.status(200).json(savedPayment);
        } else {
            res.status(400).json({ message: 'Payment not successful' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPaymentIntent, confirmPayment };