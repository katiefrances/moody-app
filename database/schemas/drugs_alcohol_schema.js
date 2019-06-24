const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrugsAlcohol = new Schema({
  drugs: {
    type: String,
    required: true
  },

  drugsAmount: {
    type: Number,
    min: 0,
    max: 4
  },

  alcohol: {
    type: Number,
    required: true
  },

  alcoholAmount: {
    type: Number,
    min: 0
  }
});

module.exports = DrugsAlcohol;
