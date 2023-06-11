const express = require("express");
const paymentController = require("./../controller/paymentController");

const router = express.Router();

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

router.route("/checkout").post(paymentController.checkout);
// router.route("/paymentverification").post(paymentVerification);

module.exports = router;
