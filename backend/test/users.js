// Code referenced from https://github.com/passport/express-4.x-local-example
// Using this as a mock DB until MySQL Database is running

var records = [
  {
    id: 1,
    username: "user",
    password: "$2b$10$SEZwXhGTa0rOTttFR/n3ze/kqVTsp5JaCvAPW.N5rO68y7RkBPfC.",
    displayName: "TestUser",
    emails: [{ value: "user@example.com" }],
  },
  {
    id: 2,
    username: "jill",
    password: "birthday",
    displayName: "Jill",
    emails: [{ value: "jill@example.com" }],
  },
];

exports.findById = function (id, cb) {
  process.nextTick(function () {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error("User " + id + " does not exist"));
    }
  });
};

exports.findByUsername = function (username) {
  for (var i = 0, len = records.length; i < len; i++) {
    var record = records[i];
    if (record.username === username) {
      return { username: record.username, password: record.password };
    }
  }
  return false;
};
