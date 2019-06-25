const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DrugsAlcoholSchema = require("./drugs_alcohol_schema");
const MedsSchema = require("./meds_schema");
const MoodsSchema = require("./moods_schema");
const UsersSchema = require("./users_schema");

const DailySchema = {
  date: { type: Date, default: Date.now },
  sleep: { type: Number, min: 0, max: 24 },
  fatigue: { type: Boolean, required: true },
  moods: [MoodsSchema],
  meds: [MedsSchema],
  drugsAlcohol: [DrugsAlcoholSchema]
};

module.exports = DailySchema;
