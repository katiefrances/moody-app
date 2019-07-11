const express = require("express");
const router = express.Router();
const MoodyController = require("../controllers/moody_controller");
const AuthRoutes = require("./auth_routes");
// can add validation here

router.get("/", MoodyController.newUser);

router.use("/auth", AuthRoutes);

router.post("/users", MoodyController.create);

router.get("/users", MoodyController.userIndex);

module.exports = router;
