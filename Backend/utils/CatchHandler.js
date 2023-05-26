const catchHandlerFunction = (error) => {
  if (
    error.code !== 11000 ||
    error.name !== "ValidationError" ||
    error.name !== "CastError"
  ) {
    res.status(401).json({
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
    message = `Invalid input data. ${errors.join(". ")}`;
  }
  if (error.name === "CastError") {
    message = `Invalid ${err.path}: ${err.value}.`;
  }
  res.status(401).json({
    status: "failed",
    message,
  });
};
