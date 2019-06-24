const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedsSchema = {
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
  }
};
