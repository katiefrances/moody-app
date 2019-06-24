const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// seperate into different schemas

const MoodSchema = new Schema({
  ate: {
    // what and how many meals
    type: Boolean,
    required: true
  },

  alcohol: {
    // type of alcohol & how much
    type: Boolean,
    required: true
  },

  exercise: {
    // amount?
    type: Boolean,
    required: true
  },

  irritation: {
    // also amount somehow
    type: Boolean,
    required: true
  },

  drugs: {
    // which
    type: Boolean,
    required: true
  },

  caffeine: {
    type: Boolean,
    required: true
  },

  events: {
    type: Boolean,
    required: true
  },

  triggers: {
    type: String,
    required: true
  }

  // end schema
});

module.exports = MoodySchema;
