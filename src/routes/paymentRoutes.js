const express = require("express");
const { protect } = require("../middlewares/auth");
const { createPaymentIntent } = require("../controllers/paymentController");

const router = express.Router();

router.post("/create-payment-intent", protect, createPaymentIntent);

module.exports = router;