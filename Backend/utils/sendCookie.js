const sendCookie = (user = {}, statusCode, res) => {
  const token = user.generateToken();

  const options = {
    maxAge: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: false,
    sameSite: "none",
  };

  res.status(statusCode).cookie("token", token).json({
    status: "success",
    user,
  });
};

module.exports = sendCookie;
