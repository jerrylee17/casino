const connection = require('../connection');

exports.selectAllUsers = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}

exports.registerUser = (username, email, hashedPassword, callback) => {
    let REGISTER_QUERY = "INSERT users VALUES ('" + username + "', '" + email + "', '" + hashedPassword + "');";
    connection.query(REGISTER_QUERY, (err, results) => {
        if (err) throw err;
        return callback(true);
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