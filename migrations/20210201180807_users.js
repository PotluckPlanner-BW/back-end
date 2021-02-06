exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("username").notNull().unique();
    table.text("password").notNull();
  });
  await knex.schema.createTable("potlucks", (table) => {
    table.increments("id"),
    table.text("date").notNull();
    table.text("time").notNull();
    table.text("location").notNull();
    table.text("invited");
    table.text("appetizer");
    table.text("salad");
    table.text("main_dish");
    table.text("dessert");
    table.text("drinks");
    table.text("utensils");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");

  await knex.schema.dropTableIfExists("potlucks");
};
