const mongoose = require("mongoose");

const Booking = require("../models/bookingModel");
const Place = require("../models/placeModel");
const User = require("../models/userModel");

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
    } = req.body;

    // const booking = new Booking({
    //   checkIn,
    //   checkOut,
    //   numberOfGuests,
    //   bookBy,
    //   name,
    //   phone,
    //   placeID,
    //   price,
    // });

    // const session = await mongoose.startSession();
    // session.startTransaction();

    // await booking.save({ session });
    // session.commitTransaction();

    const booking = await Booking.create({
      checkIn,
      checkOut,
      numberOfGuests,
      bookBy,
      name,
      phone,
      placeID,
      price,
    });

    res.status(201).json({
      status: "success",
      booking,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "failed",
      mesaage: error.mesaage,
    });
  }
};

// const newBooking = async (req, res, next) => {
//   const { movie, date, seatNumber, SeatType, ShowTime, user, theater } =
//     req.body;
//   console.log(date);
//   const date1 = date.split("T")[0];
//   console.log(date1);
//   let existingMovie;
//   let existingUser;
//   try {
//     existingPlace = await Place.findById(movie);
//     existingUser = await User.findById(user);
//   } catch (err) {
//     return console.log(err);
//   }
//   if (!existingMovie) {
//     return res.status(404).json({ message: "Movie Not Found With Given ID" });
//   }
//   if (!user) {
//     return res.status(404).json({ message: "User not found with given ID " });
//   }
//   let booking;
//   // const time = ShowTime.toISOString().split("T")[0];
//   try {
//     booking = new Booking({
//       movie,
//       date: date1,
//       seatNumber,
//       user,
//       theater,
//       SeatType,
//       ShowTime,
//     });
//     const session = await mongoose.startSession();
//     session.startTransaction();
//     existingUser.bookings.push(booking._id);
//     existingMovie.bookings.push(booking._id);

//     await User.findByIdAndUpdate(existingUser._id, existingUser, {
//       new: true,
//       runValidators: true,
//     });
//     await Movie.findByIdAndUpdate(existingMovie._id, existingMovie, {
//       new: true,
//       runValidators: true,
//     });

//     await booking.save({ session });
//     session.commitTransaction();
//   } catch (err) {
//     return console.log(err);
//   }

//   if (!booking) {
//     return res.status(500).json({ message: "Unable to create a booking" });
//   }

//   return res.status(201).json({ booking });
// };

module.exports = {
  bookPlace,
};
