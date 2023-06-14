const Razorpay = require("razorpay");

var instance = new Razorpay({
  key_id: "rzp_test_t85s42ghyD8DIN",
  key_secret: "R98JyrFO4wx5Jh04pMGhFr9v",
});

const checkout = async (req, res) => {
  const options = {
    amount: 50000,
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
};

module.exports = {
  checkout,
};
