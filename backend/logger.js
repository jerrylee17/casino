const fs = require('fs');

exports.error = (errorMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/errors.txt', "\n" + date + " Error: " + errorMessage);
}

exports.request = (reqMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/requests.txt', "\n" + date + " Message: Successfully " + reqMessage);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
}

exports.userReport = (reportMessage) => {
    let date = new Date().toJSON();
    fs.appendFileSync('./log/userReport.txt', "\n" + date + " User Report: " + reportMessage);
<<<<<<< HEAD
=======
>>>>>>> 16ce1e4... Add logger functionality for errors/requests (#37)
=======
>>>>>>> 57b49bb... Added functionality for user to submit feedback report (#54)
}