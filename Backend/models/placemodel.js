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
  description: String,
  perks: [string],
  extraInfo: String,
  checkIn: {
    type: Number,
    required: true,
  },
  checkOut: {
    type: Number,
    required: true,
  },
  maxGuest: {
    type: Number,
    required: true,
  },
});

const Place = mongoose.model("Place", placeSchema);
module.exports = Place;
