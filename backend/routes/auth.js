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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
<<<<<<< HEAD
          // check if user is banned or not 
          userQuery.checkBanned(user.username, (bannedResult) => {
            let banned = bannedResult[0].banned;
            if (banned === '1') {
              res.json({
                banned: true
              })
            } else {
=======
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
          // check if  user is admin or not
          userQuery.checkValidAdmin(user.username, (adminResult) => {
            if (adminResult.length) {
<<<<<<< HEAD
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
          // check if  user is admin or not
          userQuery.checkValidAdmin(user.username, (adminResult) => {
            if (adminResult.length) {
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
          // check if  user is admin or not
          userQuery.checkValidAdmin(user.username, (adminResult) => {
            if (adminResult.length) {
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
              jwt.sign({ user }, "secretkey", (err, token) => {
                res.json({
                  token
                });
              });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            }  
=======
<<<<<<< HEAD
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
=======
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
            } else {
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
<<<<<<< HEAD
<<<<<<< HEAD
            }
<<<<<<< HEAD
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
            }
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
=======
            }
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
          
>>>>>>> 232cad2... Add functionality to change user settings (#42)
=======

>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
=======

>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
          if (user.newPassword === '') {
            user.newPassword = user.password;
          }
          // udpate new password
          const saltRounds = 10;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          bcrypt.hash(user.newPassword, saltRounds, function (err, hashedPassword) {
=======
          bcrypt.hash(user.newPassword, saltRounds, function(err, hashedPassword) {
>>>>>>> 232cad2... Add functionality to change user settings (#42)
=======
          bcrypt.hash(user.newPassword, saltRounds, function (err, hashedPassword) {
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
=======
          bcrypt.hash(user.newPassword, saltRounds, function (err, hashedPassword) {
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
        } else {
          res.json({
            passwordError: true
          })
        }
<<<<<<< HEAD
<<<<<<< HEAD
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

app.post("/api/error-report", function(req, res) {
  if (req.body.userReport !== '') {
    logger.userReport(req.body.errorReport);
  }
  res.json({
    success: true
  })
})
=======
           
        } 
=======
>>>>>>> f696f1b... Add functionality to delete a user when they want to (#44)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 232cad2... Add functionality to change user settings (#42)
=======
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
app.post("/api/error-report", function(req, res) {
  if (req.body.userReport !== '') {
    logger.userReport(req.body.errorReport);
  }
  res.json({
    success: true
  })
})
<<<<<<< HEAD
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
module.exports = app;
