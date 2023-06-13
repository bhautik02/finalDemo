const mongoose = require("mongoose");

const Booking = require("../models/bookingModel");
const Place = require("../models/placeModel");
const { getUserFromToken } = require("./authController");
const Stripe = require("stripe");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/appError");

const bookPlace = CatchAsync(async (req, res, next) => {
  // const {
  //   checkIn,
  //   checkOut,
  //   numberOfGuests,
  //   bookBy,
  //   name,
  //   phone,
  //   placeID,
  //   price,
  //   bookedDates,
  //   placeName,
  //   placeAddress,
  //   placePhoto,
  //   checkInTime,
  //   checkOutTime,
  // } = req.body;
  // // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  // // const paymentIntent = await stripe.paymentIntents.create({
  // //   amount: Math.round(price * 100),
  // //   currency: "inr",
  // //   automatic_payment_methods: {
  // //     enabled: true,
  // //   },
  // // });

  // const booking = new Booking({
  //   checkIn,
  //   checkOut,
  //   numberOfGuests,
  //   bookBy,
  //   name,
  //   phone,
  //   place: placeID,
  //   price,
  //   placeName,
  //   placeAddress,
  //   placePhoto,
  //   checkInTime,
  //   checkOutTime,
  //   payment: paymentIntent.id,
  // });

  // const place = await Place.findById(placeID);

  // if (!place) {
  //   return next(new AppError("place doesn't exists", 404));
  // }

  // const session = await mongoose.startSession();
  // session.startTransaction();

  // place.bookedDates.push(...bookedDates);
  // await Place.findByIdAndUpdate(place._id, place, {
  //   new: true,
  //   runValidators: true,
  // });

  // const bookings = await booking.save({ session });
  // session.commitTransaction();

  // // res.status(201).json({
  // //   status: "success",
  // //   booking,
  // // });
  // res.status(200).send({
  //   booking: bookings,
  //   // clientSecret: paymentIntent.client_secret,
  // });

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
  });

  const place = await Place.findById(placeID);

  if (!place) {
    return next(new AppError("place doesn't exists", 404));
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
});

// const confirm = async (req, res, next) => {
//   console.log("req", req.body);
//   const orders = await Booking.findOneAndUpdate(
//     {
//       payment: req.body.payment_intent,
//     },
//     {
//       $set: {
//         isCompleted: true,
//       },
//     },
//     {
//       new: true,
//     }
//   );
//   console.log(orders);
//   res.status(200).json("Order has been confirmed.");
// };

const getBookings = CatchAsync(async (req, res, next) => {
  const userId = req.params.id;
  const bookings = await Booking.find({ bookBy: userId });

  if (!bookings) {
    return next(new AppError("you don't have any booking!", 404));
  }

  res.status(201).json({
    status: "success",
    length: bookings.length,
    bookings,
  });
});

// const createPaymentIntent = async (req, res, next) => {
//   const stripe = new Stripe(process.env.STRIPE);
//   // const service = await ServiceModel.findById(req.params.id);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: Math.round(500 * 100),
//     currency: "inr",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

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

//   res.status(200).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// };

module.exports = {
  bookPlace,
  getBookings,
  // confirm,
  // createPaymentIntent,
};
