const UserModel = require("../database/models/user_model");

// for sending password with S&H
const register = (req, res, next) => {
  const { email, password, name } = req.body;
  const user = new UserModel({
    email,
    name
  });

  UserModel.register(user, password, (err, user) => {
    if (err) {
      console.log(err);
      return next();
    }

    // if all g create
    return res.json(user);
  });
};

module.exports = {
  register
};
