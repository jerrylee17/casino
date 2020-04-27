const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var userQuery = require('../queries/user');
const app = express();

app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/warn", function (req, res) {
    userQuery.warnUser(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/ban", function (req, res) {
    userQuery.banUser(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/unban", function (req, res) {
    userQuery.unbanUser(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/last_login", function (req, res) {
    userQuery.getLastLogin(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/update_login", function (req, res) {
    userQuery.updateLastLogin(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/update_credit", function (req, res) {
    userQuery.updateCredit(req.body.username, req.body.amount, result => {
        res.json(result)
    });
})

app.post("/api/get_credit", function (req, res) {
    userQuery.getCredit(req.body.username, result => {
        res.json(result)
    });
})

app.post("/api/check_admin", function (req, res) {
    userQuery.checkValidAdmin(req.body.username, result => {
        res.json(result)
    });
})

app.get("/api/getUsers", function (req, res) {
    userQuery.getUsers(result => {
        res.json(result);
    });
})

app.post("/api/getBadges", function (req, res) {
    userQuery.getBadges(req.body.username, result => {
        res.json(result);
    });
})

app.post("/api/buyBadge", function (req, res) {
    userQuery.buyBadge(req.body.username, req.body.badgeName, req.body.badgeCost, result => {
        res.json(result);
    });
})

app.post("/api/getWinrate", function (req, res) {
    userQuery.getWinrate(req.body.username, result => {
        res.json(result);
    });
})

app.post("/api/getWins", function (req, res) {
    userQuery.getWins(req.body.username, result => {
        res.json(result);
    });
})

app.post("/api/getLosses", function (req, res) {
    userQuery.getLosses(req.body.username, result => {
        res.json(result);
    });
})

app.post("/api/getHistory", function (req, res) {
    userQuery.getHistory(req.body.username, result => {
        res.json(result);
    });
})
app.post("/api/playGame", function(req, res) {
    const {
        username, 
        wager, 
        game, 
        winner
    } = req.body
    userQuery.playGame(username, wager, game, winner, result => {
        res.json(result)
    })
})

module.exports = app;