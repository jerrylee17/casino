const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var db = require("../test");
const app = express();
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/login", function (req, res) {
  let user = {
    username: req.body.username,
  };
  let validUser = db.users.findByUsername(user.username);
  if (validUser) {
    bcrypt.compare(req.body.password, validUser.password, (err, result) => {
      if (err) console.log(err);
      if (result) {
        jwt.sign({ user }, "secretkey", (err, token) => {
          res.json({
            token,
          });
        });
      }
    });
  } else {
    res.json({
      token: false,
    });
  }
});

app.post("/api/register", function (req, res) {
  console.log(req.body);
  let username = req.body.username;
  let email = req.body.email;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hashedPassword) {
      if (err) {
        console.log(err);
      } else {
        // Store new user in DB w/ password hash
        console.log(username, email, hashedPassword);
        jwt.sign(
          { username: username, email: email },
          "secretkey",
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                username: username,
                email: email,
              },
            });
          }
        );
      }
    });
  });
});

module.exports = app;
