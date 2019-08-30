const DB = require("../DBconfig.js");

module.exports = {
  getUsers,
  findUser
};

function findUser(username) {
  return DB("users")
    .where({ username })
    .first();
}

function getUsers() {
  return DB("users");
}
