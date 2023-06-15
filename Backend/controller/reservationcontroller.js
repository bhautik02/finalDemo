const Booking = require("../models/bookingModel");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/appError");

const getReservations = CatchAsync(async (req, res, next) => {
  const placeId = req.params.id;
  const reservations = await Booking.find({
    place: placeId,
    isDeleted: false,
  }).select("name placeName phone checkIn checkOut price numberOfGuests");

  if (!reservations) {
    return next(new AppError("You not have any Reservations!", 404));
  }

  res.status(201).json({
    status: "success",
    length: reservations.length,
    reservations,
  });
});

module.exports = {
  getReservations,
};
