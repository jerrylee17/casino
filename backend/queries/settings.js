const connection = require('../connection');
<<<<<<< HEAD
var logger = require('../logger');
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
var logger = require('../logger');
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
var logger = require('../logger');
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)

exports.changeUserName = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
        if (err) throw err;
=======
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
        if (err) {
            logger.error(err);
            throw err;
        };
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
>>>>>>> 6ca2192... Add logger functionality for errors/requests (#37)
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