const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose
  .connect("mongodb://localhost/moody", { useNewUrlParser: true })
  .then(() => console.log("Now connected to mongoDB!"))
  .catch(err => console.log("Oh no! Something went wrong", err));

mongoose.Promise = global.Promise;
mongoose.connection.on("error", error => console.log(error));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require routes for getting controller stuff
app.use(require("./routes"));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
