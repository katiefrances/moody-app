const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = {
  name: {
    type: String,
    required: true
  },
  meds: {
    // push into array
    name: String,
    dose: Number,
    required: true
  }
};

module.exports = UsersSchema;
