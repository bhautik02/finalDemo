const Booking = require("../models/bookingModel");
const Review = require("../models/reviewModel");

const createReview = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const { place, user, name, rating, review } = req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      throw new Error("you don't have booking with this id!");
    }
    //   const checkOutDate = booking.checkOut;
    //   const checkOut = new Date(checkOutDate).getTime();
    //   const currentTime = new Date().getTime();

    //   if (checkOut > currentTime) {
    //    throw new Error("You can onlyreview after ")
    //  }

    const findReview = await Review.find({
      bookingId,
    });

    if (findReview.length > 0) {
      console.log(findReview);
      throw new Error("This place already have been reviewed by you.");
    }

    const reviews = await Review.create({
      bookingId,
      place,
      user,
      name,
      rating,
      review,
    });

    res.status(201).json({
      status: "success",
      length: reviews.length,
      reviews,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getReviews = async (req, res) => {
  try {
    const placeId = req.params.id;
    const reviews = await Review.find({ place: placeId });

    res.status(201).json({
      status: "success",
      length: reviews.length,
      reviews,
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
  createReview,
  getReviews,
};