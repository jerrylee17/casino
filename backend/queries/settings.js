const connection = require('../connection');

exports.changeUserName = (callback) => {
    let SELECT_ALL_USERS_QUERY = 'SELECT * from users';
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) throw err;
        return callback(results);
    });
}