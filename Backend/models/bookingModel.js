const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter Phone number"],
  },
  bookBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  place: {
    type: mongoose.Schema.ObjectId,
    ref: "Place",
  },
  numberOfGuests: {
    type: Number,
    required: [true, "Please enter number of Guest"],
  },
  price: {
    type: Number,
    required: [true, "Price not set"],
  },
  checkIn: {
    type: Date,
    required: true,
    default: "12:00 PM",
  },
  checkOut: {
    type: Date,
    required: true,
    default: "12:00 PM",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
