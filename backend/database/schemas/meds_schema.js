const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedsSchema = new Schema({
  // should have already have dosage and meds information

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
});

module.exports = MedsSchema;
