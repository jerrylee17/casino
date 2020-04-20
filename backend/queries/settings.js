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