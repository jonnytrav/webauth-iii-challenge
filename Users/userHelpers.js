const DB = require("../DBconfig.js");

module.exports = {
  getUsers
};

function getUsers() {
  return DB("users");
}
