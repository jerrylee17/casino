const connection = require('../connection');
var logger = require('../logger');

exports.changeUserName = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
        return callback(results);
    });
}

exports.changeUserInformation = (newUsername, email, password, username, callback) => {
    let CHANGE_USER_INFORMATION_QUERY = 'UPDATE users SET username="' + newUsername + '", email="' + email + '", password="' + password + '" WHERE username="' + username + '";';
    connection.query(CHANGE_USER_INFORMATION_QUERY, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
        return callback(results);
    });
}

exports.deleteUser = (username, callback) => {
    let DELETE_USER_QUERY = 'DELETE FROM users WHERE username="' + username + '";';
    connection.query(DELETE_USER_QUERY, (err, results) => {
        if (err) {
            logger.error(err);
            throw err;
        };
        return callback(results);
    });
}