exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("potlucks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("potlucks").insert([
        {
          id: 1,
          date: "10/10/10",
          time: "5:00pm",
          location: "bobby's backyard grill",
          invited: "john, sally, ben",
          appetizer: "pigs in a blanket",
          salad: "caesar",
          main_dish: "steaks",
          dessert: "cheesecake",
          drinks: "red wine",
          utensils: "chopsticks",
        },
      ]);
    });
};
