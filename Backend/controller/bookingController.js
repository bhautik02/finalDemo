const mongoose = require("mongoose");

const Booking = require("../models/bookingModel");
const Place = require("../models/placeModel");
const { getUserFromToken } = require("./authController");
const Stripe = require("stripe");

const bookPlace = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.STRIPE);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(service.price * 100),
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
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
      placeName,
      placeAddress,
      placePhoto,
      checkInTime,
      checkOutTime,
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
      placeName,
      placeAddress,
      placePhoto,
      checkInTime,
      checkOutTime,
      payment: paymentIntent.id,
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

    // res.status(201).json({
    //   status: "success",
    //   booking,
    // });
    res.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

const confirm = async (req, res, next) => {
  console.log("req", req.body);
  const orders = await Booking.findOneAndUpdate(
    {
      payment: req.body.payment_intent,
    },
    {
      $set: {
        isCompleted: true,
      },
    },
    {
      new: true,
    }
  );
  console.log(orders);
  res.status(200).json("Order has been confirmed.");
};
const getBookings = async (req, res) => {
  try {
    const userId = req.params.id;
    const bookings = await Booking.find({ bookBy: userId });

    if (!bookings) {
      throw new Error("You not have any Bookings.");
    }

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

const createPaymentIntent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);
  // const service = await ServiceModel.findById(req.params.id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(service.price * 100),
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  // const newBooking = new BookingModel({
  //   serviceId: service._id,
  //   img: service.img,
  //   title: service.title,
  //    iserviceProviderId: service.userId,
  //   buyerId: req.user._id,
  //   price: service.price,
  //   payment: paymentIntent.id,
  // });

  // const id = req.params.id
  //   // await newBooking.save();
  //   const newBooking = await BookingModel.findOneAndUpdate(
  //     { _id:id},
  //     { new: true }
  //   );

  res.status(200).send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = {
  bookPlace,
  getBookings,
  confirm,
};
