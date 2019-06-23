const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoodySchema = new Schema({
  sleep: {
    type: Number,
    required: true
    // well rested?
  },

  fatigue: {
    type: Number,
    required: true
  },

  mood: {
    //  Not sure of how to get multiple
    type: String,
    default: "",
    required: true
  },

  meds: {
    // yes/no and if which
    type: String,
    default: ""
  },

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
