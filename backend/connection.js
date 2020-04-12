
const mysql = require("mysql");
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "blits",
    waitForConnections : true,
    wait_timeout : 28800,
    connect_timeout :10
});

module.exports = connection;