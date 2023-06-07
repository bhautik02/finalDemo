const express = require("express");
const boookingController = require("../controller/bookingController");

const router = express.Router();

router.route("/bookings").post(boookingController.bookPlace);

module.exports = router;
