const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth_controller");
const passport = require("passport");

router.post("/register", AuthController.register);
// Adding a route to login?

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

module.exports = router;
