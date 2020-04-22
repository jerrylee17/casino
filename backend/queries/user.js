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

exports.registerUser = (username, email, hashedPassword, admin, callback) => {
    let currentDate = new Date().toJSON();
    let REGISTER_QUERY;
    let REGISTER_QUERY_USER = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
    if (admin) {
        REGISTER_QUERY = "INSERT user_admin VALUES ('" + username + "');"
    } else {
        REGISTER_QUERY = "INSERT player VALUES ('" + username + "', 0, 0, '" + currentDate + "', false);";
    }
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