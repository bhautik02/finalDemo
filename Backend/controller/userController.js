const sendEmail = require("../utils/email");
const sendCookie = require("../utils/sendCookie");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
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
      subject: "Thank you for Signing Up",
    });

    res.status(200).json({
      status: "success",
      message: "User Registerd!",
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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");
    // .select("-createdAt")
    // .select("-updatedAt")
    // .select("-__v");

    if (!user) {
      throw new Error("User doesn't exist");
    }

    const isPasswordMatched = await user.comparePassword(password);
    console.log("ispa", isPasswordMatched);

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

// const logoutUser = (req, res) => {
//   try {
//     const options = {
//       maxAge: 0,
//     };

//     res.status(200).cookie("token", "", options).json({
//       status: "success",
//     });
//   } catch (error) {
//     res.status(401).json({
//       status: "failed",
//       message: error.message,
//     });
//   }
// };

const logoutUser = (req, res) => {
  try {
    res
      .clearCookie("token", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("logOut.");
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: error.message,
    });
  }
};

const profile = async (req, res) => {
  try {
    const { token } = req.cookies;

    if (!token || token === "null") {
      throw new Error("Please Login to Access");
    }

    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) {
        console.log(err);
        throw new Error(err.message);
      } else {
        // try {
        // console.log(user);
        const userDoc = await User.findById(user.id).select(
          "-createdAt -updatedAt -__v"
        );

        if (!userDoc) {
          throw new Error("User not Found!");
        }

        res.status(200).json({
          status: "success",
          user: userDoc,
        });
      }
      // catch (error) {
      //   res.status(401).json({
      //     status: "failed",
      //     message: error.message,
      //   });
      // }
      // }
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
