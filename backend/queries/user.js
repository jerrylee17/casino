const connection = require('../connection');
var logger = require('../logger');

exports.getUsers = (callback) => {
  let SELECT_ALL_USERS_QUERY = 'SELECT player_id, no_of_chips, no_of_warns, banned FROM player';
  connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    return callback(results);
  });
}

exports.registerUser = (username, email, hashedPassword, admin, callback) => {
  let currentDate = new Date().toJSON();
  let REGISTER_QUERY;
  let REGISTER_QUERY_USER = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
  if (admin) {
    REGISTER_QUERY = "INSERT user_admin VALUES ('" + username + "');"
  } else {
    REGISTER_QUERY = "INSERT player VALUES ('" + username + "', 500, 0, 0, 0,'" + currentDate + "', false);";
  }

  // Create badges for the user
  let BADGES_QUERY =
    "INSERT badges_shop VALUES ('" + username + "', false, 'Casual Noob', 2000, 'We are all noobs over here, we gotta start somewhere (casually).');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'All Threes', 2500, 'Getting three matching slots thrice!');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'Get That Coin', 2500, 'Has won the coin flip at least once!');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'Make it Rain', 5000, 'Accumulated 5000 chips in total balance. Make it rain!');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'Blackjack Master', 10000, 'Congratulations for winning 10+ times! No need to be modest.');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'True Winner', 10000, 'Won in Blackjack, Coin Flip, and Slots.');" +
    "INSERT badges_shop VALUES ('" + username + "', false, '30 Day Login Streak', 15000, 'This user has logged in 30 days in a row! That is impressive.');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'Casual Pro', 25000, 'Too pro for winning 1000 chips in total from all the games you participated in.');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'God Chains', 50000, 'This badge is the ultimate badge to show everyone who is boss.');" +
    "INSERT badges_shop VALUES ('" + username + "', false, 'Senpai Club', 1000000, 'The senpai badge! Senpai on the streets.');";

  connection.query(REGISTER_QUERY_USER, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    connection.query(REGISTER_QUERY, (err, results) => {
      if (err) {
        logger.error(err);
        throw err;
      };
      logger.request("registered user - " + username);
      connection.query(BADGES_QUERY, (err, results) => {
        if (err) {
          logger.error(err);
          throw err;
        }
        logger.request("inserted badges - " + username);
        return callback(true);
      })
    });
  });
}

exports.checkValidUser = (username, callback) => {
  let FIND_USERNAME_QUERY = "SELECT * FROM users WHERE username='" + username + "'";
  connection.query(FIND_USERNAME_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("checked valid user - " + username);
    return callback(results);
  });
}

exports.checkValidEmail = (email, callback) => {
  let FIND_EMAIL_QUERY = "SELECT * FROM users WHERE email='" + email + "'";
  connection.query(FIND_EMAIL_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("checked valid email - " + email);
    return callback(results);
  });
}

exports.checkValidAdmin = (username, callback) => {
  let FIND_ADMIN_QUERY = "SELECT * FROM user_admin WHERE admin_id='" + username + "'";
  connection.query(FIND_ADMIN_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("checked valid admin - " + username);
    return callback(results);
  });
}

exports.warnUser = (username, callback) => {
  let WARN_USER_QUERY = "UPDATE player SET no_of_warns=no_of_warns+1 WHERE player_id='" + username + "';";
  connection.query(WARN_USER_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("warned user - " + username);
    return callback(results);
  });
}

exports.banUser = (username, callback) => {
  let BAN_USER_QUERY = "UPDATE player SET banned=1 WHERE player_id='" + username + "';";
  connection.query(BAN_USER_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("banned user - " + username);
    return callback(results);
  });
}

exports.unbanUser = (username, callback) => {
  let UNBAN_USER_QUERY = "UPDATE player SET banned=0 WHERE player_id='" + username + "';";
  connection.query(UNBAN_USER_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("unbanned user - " + username);
    return callback(results);
  });
}

exports.checkBanned = (username, callback) => {
  let CHECK_IF_BANNED_USER_QUERY = "SELECT * FROM player WHERE player_id='" + username + "';";
  connection.query(CHECK_IF_BANNED_USER_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("check user banned - " + username);
    return callback(results);
  })
}

exports.getLastLogin = (username, callback) => {
  let GET_LAST_LOGIN_QUERY = "SELECT last_login FROM player WHERE player_id='" + username + "';";
  connection.query(GET_LAST_LOGIN_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("get last user login - " + username);
    return callback(results);
  });
}

exports.updateLastLogin = (username, callback) => {
  let currentDate = new Date().toJSON();
  let UPDATE_LAST_LOGIN_QUERY = "UPDATE player SET last_login='" + currentDate + "' WHERE player_id='" + username + "';";
  connection.query(UPDATE_LAST_LOGIN_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("update last login - " + username);
    return callback(results);
  });
}

exports.updateCredit = (username, amount, callback) => {
  let UPDATE_CREDIT_QUERY = "UPDATE player SET no_of_chips=no_of_chips+" + amount + " WHERE player_id='" + username + "';";
  connection.query(UPDATE_CREDIT_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("update user credit - " + username);
    return callback(results);
  });
}

exports.getCredit = (username, callback) => {
  let GET_LAST_LOGIN_QUERY = "SELECT no_of_chips FROM player WHERE player_id='" + username + "';";
  connection.query(GET_LAST_LOGIN_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("get user credits - " + username);
    return callback(results);
  });
}

exports.getBadges = (username, callback) => {
  let GET_BADGES = "SELECT * FROM badges_shop WHERE owner_name='" + username + "' ORDER BY badge_cost ASC;";
  connection.query(GET_BADGES, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    };
    logger.request("get user badges - " + username);
    return callback(results);
  });
}

exports.buyBadge = (username, badgeName, badgeCost, callback) => {
  this.getCredit(username, result => {
    // eligible to buy badge
    let credit = result[0].no_of_chips;
    if (credit >= badgeCost) {
      // deduct credits and purchase badge
      this.updateCredit(username, -badgeCost, result => {
        let UPDATE_BADGE_OWN = "UPDATE badges_shop SET owned=true WHERE owner_name='" + username + "' AND badge_name='" + badgeName + "';";
        connection.query(UPDATE_BADGE_OWN, (err, results) => {
          if (err) {
            logger.error(err);
            throw err;
          };
          logger.request("update user badge own - " + username);
          return callback(results);
        });
      })
    } else {
      return callback("CreditError");
    }
  });
}

exports.playGame = (username, wager, game, winner, callback) => {
  let chipUpdate;
  let win = 0
  if (winner == 0) {
    chipUpdate = wager*(-1);
  } else if (winner == 2) {
    win = 1;
    chipUpdate = wager;
    if (game == 'Slots'){
      chipUpdate = wager*50;
    }
  } else {
    chipUpdate = 0;
  }
  let MODIFY_CHIPS_QUERY = `
    UPDATE player 
    SET no_of_chips=no_of_chips+${chipUpdate}, 
        no_of_wins=no_of_wins+${win},
        no_of_losses=no_of_losses+${1-win}
    WHERE player_id='${username}';`;
  let GAME_LOG_QUERY = `
    INSERT INTO game
    (game_status, wager_amt, game_type, game_starter, winner)
    VALUES 
    ('Finished', ${wager}, '${game}', '${username}', ${winner})
  `
  connection.query(MODIFY_CHIPS_QUERY, (err, results) => {
    if (err) {
      logger.error(err);
      throw err;
    }
    connection.query(GAME_LOG_QUERY, (err, results) => {
      if(err){
        logger.error(err);
        throw err;
      }
      return callback(results)
    })
  })
}
