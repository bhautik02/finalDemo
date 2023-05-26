const User = require("../models/userModel");
const sendEmail = require("../utils/email");
const sendCookie = require("../utils/sendCookie");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (password.includes(" ")) {
      throw new Error(
        "You can not enter space as a password, Change your password!!!"
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    await sendEmail({
      email: newUser.email,
      name: newUser.name,
    });

    res.status(200).json({
      status: "success",
      newUser,
    });
  } catch (error) {
    if (
      error.message ===
      "You can not enter space as a password, Change your password!!!"
    ) {
      return res.status(401).json({
        status: "failed",
        message: error.message,
      });
    }

    let message;

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

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("User doesn't exist");
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      throw new Error("Password doesn't match");
    }

    sendCookie(user, 201, res);
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

const logoutUser = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

const profile = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("token:" + token);

    if (!token) {
      throw new Error("Please Login to Access");
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (!err) {
        try {
          const userDoc = await User.findById(user.id);

          if (!userDoc) {
            throw new Error("User not Found!");
          }

          res.status(200).json({
            status: "success",
            user: userDoc,
          });
        } catch (error) {
          res.status(401).json({
            status: "failed",
            message: error.message,
          });
        }
      } else {
        throw new Error();
      }
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  profile,
};
