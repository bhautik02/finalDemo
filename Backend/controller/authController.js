const jwt = require("jsonwebtoken");
const getUserFromToken = async (req) => {
  const { token } = req.cookies;

  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) throw err;
      resolve(user);
    });
  });
};

module.exports = { getUserFromToken };
