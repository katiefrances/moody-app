const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailySchema = {
  sleep: { type: Number, min: 0, max: 24 },

  meds: {
    // checkboxes
    type: Boolean,
    required: true
  },

  medsMorning: {
    type: Boolean,
    required: true
  },

  medsLunchtime: {
    type: Boolean,
    required: true
  },

  medsEvening: {
    type: Boolean,
    required: true
  },

  // set severity out of 4, 0 being stable
  moodManic: {
  mani: { type: Number, min: 0, max: 4 },
  },

  // set severity out of 4, 0 being stable
  moodDepressed: {
  depressed: { type: Number, min: 0, max: 4 },
  },

  // set severity out of 4, 0 being stable
  moodAnxious: {
    anxiety: { type: Number, min: 0, max: 4 },
  },



}, 
