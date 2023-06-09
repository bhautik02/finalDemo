const express = require("express");
const reservationController = require("../controller/reservationcontroller");

const router = express.Router();

router.route("/reservation/:id").get(reservationController.getReservations);

module.exports = router;
