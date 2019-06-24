// Links to model
const MoodyModel = require("./../database/models/moody_model");

// Index of users that are returned on load
function userIndex(req, res) {
  MoodyModel.find()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      return res.status.send(`Error: ${err}`);
    });
}

// If 200 - render
function newUser(req, res) {
  return res.render("users");
}

// Create functions
function create(req, res) {
  let {
    sleep,
    fatigue,
    mood,
    meds,
    food,
    alcohol,
    exercise,
    irritation,
    drugs,
    caffeine,
    events,
    triggers
  } = req.body;

  let user = {
    sleep,
    fatigue,
    mood,
    meds,
    food,
    alcohol,
    exercise,
    irritation,
    drugs,
    caffeine,
    events,
    triggers
  };

  // create user
  MoodyModel.create(user)
    .then(user => {
      return res.render("success");
    })
    .catch(err => {
      return res.status(500).send(`Error: ${err}`);
    });
}

// export functions
module.exports = {
  userIndex,
  newUser,
  create
};
