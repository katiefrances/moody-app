const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoodsSchema = {
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
};

module.exports = MoodsSchema;
