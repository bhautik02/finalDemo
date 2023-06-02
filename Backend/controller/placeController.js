// const

const Place = require("../models/placeModel");

const getYourHostedPlace = async (req, res) => {
  try {
    const ownerId = req.params.id;
    console.log(ownerId);
    const hostedPlace = await Place.find({ owner: ownerId });

    if (!hostedPlace) {
      throw new Error("no place found...");
    }

    res.status(200).json({
      status: "success",
      length: hostedPlace.length,
      hostedPlace,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getAllHostedplaces = async (req, res) => {
  try {
    const hostedPlace = await Place.find();

    if (!hostedPlace) {
      throw new Error("no place found...");
    }

    res.status(200).json({
      status: "success",
      length: hostedPlace.length,
      hostedPlace,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

const hostPlace = async (req, res) => {
  try {
    const {
      title,
      address,
      photo,
      description,
      perks,
      checkIn,
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
      checkOut,
      maxGuest,
      noOfBedrooms,
      noOfBathrooms,
      owner: ownerId,
    });

    if (!newHostedPlace) {
      throw new Error("getting trouble in creating host data...");
    }
    res.status(200).json({
      status: "success",
      newHostedPlace,
    });
  } catch (error) {
    if (error.code === 11000) {
      message = "User already exist.";
    }
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((el) => el.message);
      message = `${errors.join(".\n")}`;
    }
    if (error.name === "CastError") {
      message = `Invalid ${err.path}: ${err.value}.`;
    }
    res.status(401).json({
      status: "failed",
      message,
    });
  }
};

module.exports = {
  getYourHostedPlace,
  getAllHostedplaces,
  hostPlace,
};
