const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
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
    },
    checkOut: {
      type: Date,
      required: true,
    },
    placePhoto: {
      type: String,
      required: true,
    },
    placeName: {
      type: String,
      required: true,
    },
    placeAddress: {
      type: String,
      required: true,
    },
    checkInTime: {
      type: String,
      required: true,
    },
    checkOutTime: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
