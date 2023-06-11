const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const user = require("./routes/userRoutes");
const place = require("./routes/placeRoute");
const booking = require("./routes/bookingRoute");
const reservation = require("./routes/reservationRoute");
const review = require("./routes/reviewRoute");
const payment = require("./routes/paymentRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/v1/users", user);
app.use("/api/v1/place", place);
app.use("/api/v1/book", booking);
app.use("/api/v1", reservation);
app.use("/api/v1/review", review);
app.use("/api/v1", payment);

module.exports = app;
