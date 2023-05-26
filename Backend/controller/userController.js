const User = require("../models/userModel");
const sendCookie = require("../utils/sendCookie");
const jwt = require("jsonwebtoken");

// /api/v1/users/signup
//public
//sign up
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

    // await sendEmail({
    //   email: newUser.email,
    //   subject: "You have Registered successfully...",
    //   message: `WELCOME ${newUser.name}\nId:${newUser.email}\nPassword:${newUser.password}`,
    // });

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

// /api/v1/users/login
//public
//Login

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("User doesn't exist", 401);
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      throw new Error("Password doesn't match", 401);
    }

    sendCookie(user, 201, res);

    // res.status(200).json({
    //   status: "success",
    //   user,
    // });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

// /api/v1/users/logout
//public
//logout

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

// /api/v1/users/profile
//public
//sign up

const profile = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("token:" + token);

    if (!token) {
      throw new Error("Please Login to Access");
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) {
        throw new Error();
      } else {
        res.status(200).json({
          status: "success",
          user,
        });
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
