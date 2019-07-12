const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoodsSchema = new Schema({
  moodManic: {
    manic: { type: Number, min: 0, max: 4 }
  },

  // set severity out of 4, 0 being stable
  moodDepressed: {
    depressed: { type: Number, min: 0, max: 4 }
  },

  // set severity out of 4, 0 being stable
  moodAnxious: {
    anxiety: { type: Number, min: 0, max: 4 }
  }
});

module.exports = MoodsSchema;
