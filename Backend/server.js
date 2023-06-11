const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
dotenv.config({ path: "./config.env" });
const app = require("./app");

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
  console.log(`connected ${port}`);
});

app.listen(port, () => {
  console.log("app is running ", port);
});

module.exports = instance;
