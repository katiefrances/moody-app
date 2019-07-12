const { Schema } = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  meds: {
    // push into array
    name: String,
    dose: Number
    // required: true
  }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = UserSchema;
