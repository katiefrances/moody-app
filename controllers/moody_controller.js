// Links to model
const DailyModel = require("./../database/models/daily_model");

// Index of users that are returned on load
function userIndex(req, res) {
  DailyModel.find()
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
    tired,
    moodManic,
    moodDepressed,
    moodAnxious
    // mood,
    // meds,
    // food,
    // alcohol,
    // exercise,
    // irritation,
    // drugs,
    // caffeine,
    // events,
    // triggers
  } = req.body;

  let user = {
    sleep,
    tired,
    mood: { moodManic, moodDepressed, moodAnxious }
    // mood,
    // meds,
    // food,
    // alcohol,
    // exercise,
    // irritation,
    // drugs,
    // caffeine,
    // events,
    // triggers
  };

  // create user
  DailyModel.create(user)
    .then(user => {
      console.log(user);
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
