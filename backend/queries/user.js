const connection = require('../connection');

exports.selectAllUsers = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.registerUser = (username, email, hashedPassword, callback) => {
    let REGISTER_QUERY_USER = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
    let REGISTER_QUERY_PLAYER = "INSERT player VALUES ('" + username + "', 0, 0, false);";
    connection.query(REGISTER_QUERY_USER, (err, results) => {
        if (err) throw err;
        connection.query(REGISTER_QUERY_PLAYER, (err, results) => {
            if (err) throw err;
            return callback(true);
        });
    });
}

exports.checkValidUser = (username, callback) => {
    let FIND_USERNAME_QUERY = "SELECT * FROM users WHERE username='" + username + "'";
    connection.query(FIND_USERNAME_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.checkValidEmail = (email, callback) => {
    let FIND_EMAIL_QUERY = "SELECT * FROM users where email='" + email + "'";
    connection.query(FIND_EMAIL_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.warnUser = (username, callback) => {
    let WARN_USER_QUERY = "UPDATE player SET no_of_warns=no_of_warns+1 WHERE player_id='" + username + "';";
    connection.query(WARN_USER_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.banUser = (username, callback) => {
    let BAN_USER_QUERY = "UPDATE player SET banned=1 WHERE player_id='" + username + "';";
    connection.query(BAN_USER_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.unbanUser = (username, callback) => {
    let UNBAN_USER_QUERY = "UPDATE player SET banned=0 WHERE player_id='" + username + "';";
    connection.query(UNBAN_USER_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}