const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log("frontend:", token);

    if (token) {
      let user = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = user.id;
    } else {
      return res.status(401).json({
        status: "failed",
        message: "Please log in...",
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      message: "You are not authenticated, try again later.",
    });
  }
  next();
};

module.exports = authentication;
