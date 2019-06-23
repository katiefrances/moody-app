const mongoose = require("mongoose");
const MoodySchema = require("./../schemas/contact_schema");
const MoodyModel = mongoose.model("user", MoodySchema);

module.exports = MoodyModel;
