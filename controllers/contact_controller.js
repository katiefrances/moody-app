const ContactModel = require("./../database/models/contact_model");

function index(req, res) {
  ContactModel.find()
    .then(contacts => {
      return res.json(contacts);
    })
    .catch(err => {
      return res.status(500).send(`Error: ${err}`);
    });
}

function newResource(req, res) {
  return res.render("contact");
}

function create(req, res) {
  let { name, email, enquiry } = req.body;
  let contact = { name, email, enquiry };

  ContactModel.create(contact)
    .then(contact => {
      return res.render("success");
    })
    .catch(err => {
      return res.status(500).send(`Error: ${err}`);
    });
}

// export functions
module.exports = {
  index,
  newResource,
  create
};
