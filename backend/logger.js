const fs = require('fs');

exports.error = (errorMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/errors.txt', "\n" + date + " Error: " + errorMessage);
}

exports.request = (reqMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/requests.txt', "\n" + date + " Message: Successfully " + reqMessage);
<<<<<<< HEAD
}

exports.userReport = (reportMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/userReport.txt', "\n" + date + " User Report: " + reportMessage);
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
}