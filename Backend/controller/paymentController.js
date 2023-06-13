// const instance = require("./../server");
// // const crypto = require("crypto");
// // const { Payment } = require("../models/paymentModel.js");

// const checkout = async (req, res) => {
//   const options = {
//     amount: 50000,
//     currency: "INR",
//   };
//   const order = await instance.orders.create(options);

//   res.status(200).json({
//     success: true,
//     order,
//   });
// };

// module.exports = {
//   checkout,
// };

// const Booking = require("./models/bookingModel");

// const createPaymentIntent = async (req, res, next) => {
//   const stripe = new Stripe(process.env.STRIPE);

//   const booking = await Booking.findById(req.params.id);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: booking.price * 100,
//     currency: "inr",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });
// };

// module.exports = createPaymentIntent;
