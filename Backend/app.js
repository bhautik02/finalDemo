const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const user = require("./routes/userRoutes");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));
// app.get('/', (req, res, next) => {
//     res.status(200).json({
//         msg:'hello'
//     })
// })

app.use("/api/v1/users", user);

module.exports = app;
