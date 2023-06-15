const express = require("express");
const placeController = require("../controller/placeController");

const router = express.Router();

router.route("/hostPlaces").get(placeController.getAllHostedplaces);
router.route("/:id").get(placeController.getPlace);
router.route("/hostPlace/:id").get(placeController.getYourHostedPlace);
router.route("/hostPlace/:id").post(placeController.hostPlace);
router.route("/hostPlace/:id").patch(placeController.updateHostedData);
router.route("/deletePlace/:id").patch(placeController.deleteHostedData);

module.exports = router;
