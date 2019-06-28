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
async function newUser(req, res) {
  return res.render("users");
}

// Create functions
async function create(req, res) {
  console.log(req.body);

  let {
    date,
    sleep,
    tired,
    manic,
    depressed,
    anxiety,
    irritation,
    meds,
    // medsMorning,
    // medsLunchtime,
    // medsEvening,
    drugs,
    // drugsAmount,
    alcohol,
    // alcoholAmount,
    ate,
    exercise,
    caffeine,
    events,
    period,
    dbtskills,
    triggers
  } = req.body;

  let user = {
    date,
    sleep,
    tired,
    manic,
    depressed,
    anxiety,
    irritation,
    meds,
    // medsMorning,
    // medsLunchtime,
    // medsEvening,
    drugs,
    // drugsAmount,
    alcohol,
    // alcoholAmount,
    ate,
    exercise,
    caffeine,
    events,
    period,
    dbtskills,
    triggers
  };

  // create user
  DailyModel.create(user)
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
