//// Use passport to validate user via the createStrategy() function ////

const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;

const UserModel = require("./../database/models/user_model");

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

// This is us taking our plugin and creating a strategy from it - allowing us to call passport.authenticate in the AuthRoutes
passport.use(UserModel.createStrategy());

module.exports = passport;
