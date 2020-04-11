
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "blits",
});
connection.connect(err => {
    if (err) return err;
});

module.exports = connection;