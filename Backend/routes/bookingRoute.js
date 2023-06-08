const express = require("express");
const boookingController = require("../controller/bookingController");

const router = express.Router();

router.route("/bookings").post(boookingController.bookPlace);
router.route("/bookings/:id").get(boookingController.getBookings);

module.exports = router;
