const mongoose = require("mongoose");

const placeSchema = mongoose.Schema(
  {
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
    bookedDates: {
      type: [String],
      default: [],
    },
    numberOfReview: {
      type: Number,
      dafult: 0,
    },
    totalRatings: {
      type: Number,
      dafult: 0,
    },
    isDeleted: {
      type: Boolean,
      dafult: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

placeSchema.virtual("host", {
  ref: "User",
  foreignField: "_id",
  localField: "owner",
});

placeSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "place",
  localField: "_id",
});

module.exports = mongoose.model("Place", placeSchema);
