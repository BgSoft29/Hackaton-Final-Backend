const express = require("express");
const { protect } = require("../middlewares/auth");
const { createPaymentIntent, confirmPayment } = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-payment-intent", protect, createPaymentIntent);
router.post("/confirm-payment", protect, confirmPayment);

module.exports = router;