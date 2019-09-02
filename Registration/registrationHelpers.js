const DB = require("../DBconfig.js");

module.exports = {
  createUser
};

function createUser(user) {
  return DB("users").insert(user);
}
