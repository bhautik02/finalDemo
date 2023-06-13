const jwt = require("jsonwebtoken");
const CatchAsync = require("../utils/CatchAsync");
const getUserFromToken = CatchAsync(async (req, res, next) => {
  const { token } = req.cookies;

  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) return next(new AppError(err.message, 401));
      resolve(user);
    });
  });
});

module.exports = { getUserFromToken };
