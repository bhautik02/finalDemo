// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// exports.isAuthenticated = async (req, res, next) => {
//   try {
//     const { token } = req.cookies;

//     if (!token) {
//       throw new Error("Please Login to Access");
//     }

//     const decodedData = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decodedData.id);
//     next();
//   } catch (error) {

//   }
// };
