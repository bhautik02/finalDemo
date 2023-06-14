const sendCookie = (user = {}, statusCode, res) => {
  const token = user.generateToken();
  const options = {
    maxAge: 24 * 60 * 60 * 1000,
  };

  res.status(statusCode).cookie("token", token, options).json({
    status: "success",
    user,
  });
};

module.exports = sendCookie;
