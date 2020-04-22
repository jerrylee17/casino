const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var userQuery = require('../queries/user');
var logger = require('../logger');
const app = express();
var settingsQuery = require('../queries/settings');

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
    email: req.body.email
  };
  // check if the username is valid
  userQuery.checkValidUser(user.username, (result) => {
    let validUser = result;
    if (validUser.length) {
      // compare input password & password in db
      bcrypt.compare(req.body.password, validUser[0].password, (err, result) => {
        if (err) {
          logger.error(err);
          throw err;
        };
        if (result) {
          // check if user is banned or not 
          userQuery.checkBanned(user.username, (bannedResult) => {
            let banned = bannedResult[0].banned;
            if (banned === '1') {
              res.json({
                banned: true
              })
            } else {
              jwt.sign({ user }, "secretkey", (err, token) => {
                res.json({
                  token
                });
              });
            }
          })
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
  let user = { username: req.body.username, email: req.body.email };
  let admin = req.body.admin;
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hashedPassword) {
      if (err) {
        logger.error(err);
        throw err;
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
              if (admin) {
                bcrypt.genSalt(saltRounds, function (err, salt) {
                  bcrypt.hash(admin, salt, function (err, hashedAdminKey) {
                    if (err) {
                      logger.error(err);
                      throw err;
                    } else {
                      bcrypt.compare("secretadminkey", hashedAdminKey, (err, result) => {
                        if (result) {
                          // Store new user in DB w/ password hash
                          userQuery.registerUser(user.username, email, hashedPassword, admin, (result) => {
                            // automatically logs in the user
                            if (result) {
                              jwt.sign({ user }, "secretkey", (err, token) => {
                                res.json({
                                  token
                                });
                              });
                            }
                          });
                        } else {
                          res.json({
                            adminError: true
                          })
                        }
                      })
                    }
                  })
                })
              } else {
                userQuery.registerUser(user.username, email, hashedPassword, admin, (result) => {
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
            }
          });
        });
      }
    });
  });
});

app.post("/api/change-user", function (req, res) {
  logger.request('changing user information: ', req.body.userInfo);
  const user = req.body.userInfo;
  userQuery.checkValidUser(user.username, (result) => {
    let validUser = result;
    if (validUser.length) {
      bcrypt.compare(user.password, validUser[0].password, (err, result) => {
        if (err) logger.error(err);
        if (result) {
          // let usernameError = false;
          // let emailError = false;
          userQuery.checkValidUser(user.newUsername, (exists) => {
            if (exists.length) {
              if (exists[0].username !== user.username) {
                // usernameError = true;
                res.json({
                  usernameError: true
                })
                return;
              };
            };
          })
          if (user.newEmail !== user.email) {
            userQuery.checkValidEmail(user.newEmail, (exists) => {
              if (exists.length) {
                if (exists[0].email !== user.email) {
                  // emailError = true;
                  res.json({
                    emailError: true
                  })
                  return;
                };
              };
            })
          }

          if (user.newPassword === '') {
            user.newPassword = user.password;
          }
          // udpate new password
          const saltRounds = 10;
          bcrypt.hash(user.newPassword, saltRounds, function (err, hashedPassword) {
            // store everything in the db
            settingsQuery.changeUserInformation(user.newUsername, user.newEmail, hashedPassword, user.username, (result) => {
              if (result) {
                jwt.sign({ user }, "secretkey", (err, token) => {
                  res.json({
                    token
                  });
                });
              };
            });
          });
        } else {
          res.json({
            passwordError: true
          })
        }
      })
    }
  });
});

app.post("/api/delete-user", function (req, res) {
  logger.request('deleting user with information: ', req.body.user);
  const user = req.body.user;
  userQuery.checkValidUser(user.username, (result) => {
    let valid = result;
    if (valid.length) {
      bcrypt.compare(user.password, valid[0].password, (err, result) => {
        if (err) logger.error(err);
        if (result) {
          settingsQuery.deleteUser(user.username, (result) => {
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
    } else {
      res.json({
        passwordError: true
      })
    }
  });
});

module.exports = app;
