// const

const Place = require("../models/placeModel");
const User = require("../models/userModel");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/appError");

const getPlace = CatchAsync(async (req, res, next) => {
  const placeId = req.params.id;
  const place = await Place.findById(placeId)
    .populate({
      path: "reviews",
      select: "rating review name createdAt",
    })
    .populate("host");

  if (!place) {
    return next(new AppError("Place not found!", 404));
  }

  res.status(200).json({
    status: "success",
    place,
  });
});

const getYourHostedPlace = CatchAsync(async (req, res, next) => {
  const ownerId = req.params.id;
  const hostedPlace = await Place.find({ owner: ownerId }).select("-__v");

  if (!hostedPlace) {
    return next(new AppError("Place not found!", 404));
  }

  res.status(200).json({
    status: "success",
    length: hostedPlace.length,
    hostedPlace,
  });
});

const getAllHostedplaces = CatchAsync(async (req, res, next) => {
  const hostedPlace = await Place.find().select("-__v");

  if (!hostedPlace) {
    return next(new AppError("Places not found!", 404));
  }

  res.status(200).json({
    status: "success",
    length: hostedPlace.length,
    hostedPlace,
  });
});

const hostPlace = CatchAsync(async (req, res, next) => {
  const {
    title,
    address,
    photo,
    description,
    perks,
    checkIn,
    price,
    checkOut,
    maxGuest,
    noOfBedrooms,
    noOfBathrooms,
  } = req.body;
  const ownerId = req.params.id;
  const newHostedPlace = await Place.create({
    title,
    address,
    photo,
    description,
    perks,
    checkIn,
    price,
    checkOut,
    maxGuest,
    noOfBedrooms,
    noOfBathrooms,
    owner: ownerId,
  });

  if (!newHostedPlace) {
    return next(new AppError("Place not hosted!", 400));
  }

  res.status(200).json({
    status: "success",
    newHostedPlace,
  });
});

const updateHostedData = CatchAsync(async (req, res, next) => {
  const {
    title,
    address,
    photo,
    description,
    perks,
    checkIn,
    price,
    checkOut,
    maxGuest,
    noOfBedrooms,
    noOfBathrooms,
  } = req.body;
  const placeId = req.params.id;
  console.log(placeId);
  const editedHostedPlace = await Place.findByIdAndUpdate(
    placeId,
    {
      title,
      address,
      photo,
      description,
      perks,
      checkIn,
      price,
      checkOut,
      maxGuest,
      noOfBedrooms,
      noOfBathrooms,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  console.log(editedHostedPlace);
  if (!editedHostedPlace) {
    return next(new AppError("Place not hosted!", 404));
  }

  res.status(200).json({
    status: "success",
    editedHostedPlace,
  });
});

module.exports = {
  getPlace,
  getYourHostedPlace,
  getAllHostedplaces,
  hostPlace,
  updateHostedData,
};
