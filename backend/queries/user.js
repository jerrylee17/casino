const connection = require('../connection');
var logger = require('../logger');

exports.selectAllUsers = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
        return callback(results);
    });
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
exports.registerUser = (username, email, hashedPassword, callback) => {
=======
exports.registerUser = (username, email, hashedPassword, admin, callback) => {
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
    let currentDate = new Date().toJSON();
    let REGISTER_QUERY;
    let REGISTER_QUERY_USER = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
<<<<<<< HEAD
    let REGISTER_QUERY_PLAYER = "INSERT player VALUES ('" + username + "', 0, 0, '" + currentDate + "', false);";
=======
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
exports.registerUser = (username, email, hashedPassword, admin, callback) => {
    let currentDate = new Date().toJSON();
    let REGISTER_QUERY;
    let REGISTER_QUERY_USER = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
    if (admin) {
        REGISTER_QUERY = "INSERT user_admin VALUES ('" + username + "');"
    } else {
        REGISTER_QUERY = "INSERT player VALUES ('" + username + "', 0, 0, '" + currentDate + "', false);";
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
    connection.query(REGISTER_QUERY_USER, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
<<<<<<< HEAD
<<<<<<< HEAD
        connection.query(REGISTER_QUERY, (err, results) => {
=======
        connection.query(REGISTER_QUERY_PLAYER, (err, results) => {
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
=======
        connection.query(REGISTER_QUERY, (err, results) => {
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
            if (err) {
                logger.error(err);
                throw err;
            };
            logger.request("registered user - " + username);
            return callback(true);
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
<<<<<<< HEAD
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
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
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
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2a1fc09... Daily credit login feature (#36)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9d036bc... Add user banned functionality (#34)
=======
>>>>>>> 2a1fc09... Daily credit login feature (#36)
=======
}

exports.getCredit = (username, callback) => {
    let GET_LAST_LOGIN_QUERY = "SELECT no_of_chips FROM player WHERE player_id='" + username + "';";
    connection.query(GET_LAST_LOGIN_QUERY, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
        logger.request("get user credits - " + username);
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
        return callback(results);
    });
<<<<<<< HEAD
>>>>>>> aad27cd... Fix css on pages and small additions (#40)
=======
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
<<<<<<< HEAD
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
=======
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
>>>>>>> ade4b8a... Fix css on pages and small additions (#40)
}