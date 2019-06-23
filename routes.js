const express = require("express");
const router = express.Router();
const MoodyController = require("./controllers/moody_controller");

router.get("/", MoodyController.renderUser);

router.post("/users", MoodyController.createUser);

router.get("/users", MoodyController.userIndex);

module.exports = router;
