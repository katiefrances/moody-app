const express = require("express");
const router = express.Router();
const MoodyController = require("./controllers/moody_controller");
// can add validation here

router.get("/", MoodyController.newUser);

router.post("/users", MoodyController.create);

router.get("/users", MoodyController.userIndex);

module.exports = router;
