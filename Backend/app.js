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
