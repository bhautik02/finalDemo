const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const user = require("./routes/userRoutes");
const place = require("./routes/placeRoute");

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

module.exports = app;
