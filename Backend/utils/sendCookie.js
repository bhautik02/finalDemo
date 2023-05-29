const sendCookie = (user = {}, statusCode, res) => {
  const token = user.generateToken();
  const expireIn = eval(process.env.COOKIE_EXPIRE);
  const options = {
    maxAge: expireIn,
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    status: "success",
    user,
  });
};

module.exports = sendCookie;
