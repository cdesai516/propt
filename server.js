var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var db = require("./models");
var Address = require("./models/Address")
var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

mongoose.connect("mongodb://cdesai516:comm1989@ds141932.mlab.com:41932/propt", { useNewUrlParser: true });


app.get("/", function(req, res) {
    res.render("index");
  });


  app.get("/about", function(req, res) {
    res.render("about");
  });
// Route for saving/updating an Article's associated Note
app.get("/address", function(req, res) {
  res.render("app");
});

app.get("/search", function(req, res) {

res.render("show");
});


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});