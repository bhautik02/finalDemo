const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/signup").post(userController.signupUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").get(userController.logoutUser);
router.route("/profile").get(userController.profile);

module.exports = router;
