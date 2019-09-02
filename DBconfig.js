// const knex = require("knex");
// const config = require("./knexfile.js").development;

// module.exports = knex(config);
const knex = require("knex");

const knexConfig = require("./knexfile.js");

module.exports = knex(knexConfig.development);
