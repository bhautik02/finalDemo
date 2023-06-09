const express = require("express");
const reviewController = require("../controller/reviewController");

const router = express.Router();

router.route("/reviews/:id").post(reviewController.createReview);
router.route("/reviews/:id").get(reviewController.getReviews);

module.exports = router;
