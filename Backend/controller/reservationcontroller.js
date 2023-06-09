const Booking = require("../models/bookingModel");

const getReservations = async (req, res) => {
  try {
    const placeId = req.params.id;
    const reservations = await Booking.find({ place: placeId }).select(
      "name placeName phone checkIn checkOut price numberOfGuests"
    );

    if (!reservations) {
      throw new Error("You not have any Reservations.");
    }

    res.status(201).json({
      status: "success",
      length: reservations.length,
      reservations,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getReservations,
};
