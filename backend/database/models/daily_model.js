const mongoose = require("mongoose");
const DailySchema = require("./../schemas/daily_schema");
const DailyModel = mongoose.model("daily", DailySchema);
// dailies db name comes from daily ^^ makes it plural - smart

module.exports = DailyModel;
