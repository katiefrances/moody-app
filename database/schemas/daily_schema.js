const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UsersSchema = require("./users_schema");

const DailySchema = new Schema({
  // date for new day
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },

  sleep: {
    type: Number,
    minlength: 0,
    maxlength: 24
  },

  tired: {
    type: Boolean,
    required: true
  },

  // moods
  manic: {
    type: Number,
    required: true,
    min: 0,
    max: 4
  },

  // set severity out of 4, 0 being stable

  depressed: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 4
  },

  // set severity out of 4, 0 being stable
  anxiety: {
    type: Number,
    required: true,
    minlength: 0,
    maxlength: 4
  },

  irritation: {
    // also amount somehow
    type: Number,
    required: true
  },

  // meds
  meds: {
    type: Boolean,
    required: true
  },

  // medsMorning: {
  //   type: Boolean,
  //   required: true
  // },

  // medsLunchtime: {
  //   type: Boolean,
  //   required: true
  // },

  // medsEvening: {
  //   type: Boolean,
  //   required: true
  // },

  // drugs and booze
  drugs: {
    type: Boolean,
    required: true
  },

  // drugsAmount: {
  //   type: Number,
  //   min: 0,
  //   max: 4
  // },

  alcohol: {
    type: Number,
    required: true
  },

  // alcoholAmount: {
  //   type: Number,
  //   min: 0
  // },

  // food etc
  ate: {
    // what and how many meals
    type: Number,
    required: true
  },

  exercise: {
    // amount?
    type: Boolean,
    required: true
  },

  caffeine: {
    type: Number,
    required: true
  },

  period: {
    type: Boolean,
    required: false
  },

  events: {
    type: String
  },

  dbtskills: {
    type: String
  },

  triggers: {
    type: String
  }
});

module.exports = DailySchema;
