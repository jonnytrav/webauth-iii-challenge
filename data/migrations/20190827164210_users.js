exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .text("username", 56)
      .notNullable()
      .unique();
    tbl.text("password").notNullable();
    tbl.text("department", 32).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users"); // DROP FK'S FIRST THEN TABLE THAT FK'S REFER TO
};
