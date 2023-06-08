const mongoose = require("mongoose");

const Booking = require("../models/bookingModel");
const Place = require("../models/placeModel");
const { getUserFromToken } = require("./authController");

const bookPlace = async (req, res) => {
  try {
    const {
      checkIn,
      checkOut,
      numberOfGuests,
      bookBy,
      name,
      phone,
      placeID,
      price,
      bookedDates,
    } = req.body;
    console.log(placeID);

    const booking = new Booking({
      checkIn,
      checkOut,
      numberOfGuests,
      bookBy,
      name,
      phone,
      place: placeID,
      price,
    });

    const place = await Place.findById(placeID);

    if (!place) {
      throw new Error("you don't have place with that id");
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    place.bookedDates.push(...bookedDates);
    await Place.findByIdAndUpdate(place._id, place, {
      new: true,
      runValidators: true,
    });

    await booking.save({ session });
    session.commitTransaction();

    res.status(201).json({
      status: "success",
      booking,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const userId = req.params.id;
    const bookings = await Booking.find({ bookBy: userId });

    res.status(201).json({
      status: "success",
      length: bookings.length,
      bookings,
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
  bookPlace,
  getBookings,
};
