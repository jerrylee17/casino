const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var userQuery = require('../queries/user');
const app = express();

app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', function (req, res) {
  userQuery.selectAllUsers((result) => {
    res.json(result)
  });
})

app.post("/api/login", function (req, res) {
  let user = {
    username: req.body.username,
  };
  // check if the username is valid
  userQuery.checkValidUser(user.username, (result) => {
    let validUser = result;
    if (validUser.length) {
      // compare input password & password in db
      bcrypt.compare(req.body.password, validUser[0].password, (err, result) => {
        if (err) console.log(err);
        if (result) {
          jwt.sign({ user }, "secretkey", (err, token) => {
            res.json({
              token
            });
          });
        } else {
          res.json({
            error: true
          })
        }
      });
    } else {
      res.json({
        token: false,
      });
    }
  });
});

app.post("/api/register", function (req, res) {
  let email = req.body.email;
  let user = { username: req.body.username };
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hashedPassword) {
      if (err) {
        console.log(err);
      } else {
        let usernameError = false;
        let emailError = false;
        // Check if username or email exists
        userQuery.checkValidUser(user.username, exists => {
          if (exists.length) {
            usernameError = true;
            res.json({
              usernameError: true
            })
            return;
          }
          userQuery.checkValidEmail(email, exists => {
            if (exists.length) {
              emailError = true;
              res.json({
                emailError: true
              })
              return;
            }
            if (!usernameError && !emailError) {
              // Store new user in DB w/ password hash
              userQuery.registerUser(user.username, email, hashedPassword, (result) => {
                // automatically logs in the user
                if (result) {
                  jwt.sign({ user }, "secretkey", (err, token) => {
                    res.json({
                      token
                    });
                  });
                }
              });
            }
          });
        });
      }
    });
  });
});

module.exports = app;
