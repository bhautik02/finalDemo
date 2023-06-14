const express = require("express");
const paymentController = require("./../controller/paymentController");

const router = express.Router();

router.route("/checkout").post(paymentController.checkout);
router.route("/verify").post(paymentController.verify);
// router.route("/paymentverification").post(paymentVerification);

module.exports = router;
