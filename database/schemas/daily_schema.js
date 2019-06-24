const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = {
  sleep: { type: Number, min: 0, max: 24 }
};

export default DailySchema;
