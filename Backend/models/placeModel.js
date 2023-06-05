const mongoose = require("mongoose");

const placeSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  perks: [String],
  price: {
    type: Number,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
  maxGuest: {
    type: Number,
    required: true,
  },
  noOfBathrooms: {
    type: Number,
    required: true,
  },
  noOfBedrooms: {
    type: Number,
    required: true,
  },
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
