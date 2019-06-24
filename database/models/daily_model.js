const mongoose = require("mongoose");
const DailySchema = require("./../schemas/daily_schema");
const DailyModel = mongoose.model("user", DailySchema);

module.exports = DailyModel;
