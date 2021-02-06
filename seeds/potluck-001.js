exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("potlucks").truncate()

  await knex("potlucks").insert([
        {
          id: 1,
          date: "10/10/10",
          time: "5:00pm",
          location: "bobby's backyard grill",
          invited: "john, sally, ben, amy, frank",
          appetizer: "john - pigs in a blanket",
          salad: "amy - caesar",
          main_dish: "frank steaks",
          dessert: "sally - cheesecake",
          drinks: "",
          utensils: "john - chopsticks",
        },
        {
         id: 2,
         date: "9/9/9",
         time: "4:00pm",
         location: "Market Valley picnic",
         invited: "Marissa, Larissa, Bob, John, Terone",
         appetizer: "Marissa - coffee",
         salad: "Bob - pasta salad",
         main_dish: "Larissa - steaks",
         dessert: "Bob - bread",
         drinks: "John - soda",
         utensils: "",
       },
       {
         id: 3,
         date: "8/8/8",
         time: "7:15pm",
         location: "The Shire",
         invited: "Frodo, Bilbo, Merry, Pippin, Gandolf, Gollum",
         appetizer: "Gandolf - pipeweed",
         salad: "Merry - pasta salad",
         main_dish: "Frodo - steaks",
         dessert: "Bilbo - cake",
         drinks: "Pippin - ale",
         utensils: "Gollum - the ring",
       },
       {
         id: 4,
         date: "7/7/7",
         time: "8:15pm",
         location: "Smurf Village",
         invited: "Papa, Azrael, Gargamel, Grouchy, Brainy,  ",
         appetizer: "Papa - blue cheese",
         salad: "Grouchy - nothing",
         main_dish: "Papa - blue steaks",
         dessert: "Gargamel - evil cake",
         drinks: "Brainy - vitamin water",
         utensils: "Clumsey - broken spoons",
       },
      ]);
};
