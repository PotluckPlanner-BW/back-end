const { insert } = require("../database/dbConfig");
const db = require("../database/dbConfig");

module.exports = {
  getAllPotlucks,
  getPotluckById,
  getPotluckByUserId,
  updatePotluck,
  addPotluck,
  deletePotluck,
};

function getAllPotlucks() {
  return db("potlucks").select("*");
}

function getPotluckById(id) {
  return db("potlucks").select("*").where({ id }).first();
}
function getPotluckByUserId(id) {
  return db("potlucks as p")
    .where("user_id", id)
    .join("users", "users.id", "p.user_id")
    .select(
      "users.username",
      "users.id as user_id",
      "p.date",
      "p.time",
      "p.location",
      "p.invited",
      "p.appetizer",
      "p.salad",
      "p.main_dish",
      "p.dessert",
      "p.drinks",
      "p.utensils"
    );
}

function addPotluck(potluck) {
  return db("potlucks").insert(potluck)
    .then((id) => {
       getPotluckById(id[0]);
  });
}

function updatePotluck(id, changes) {
  return db("potlucks").where("id", id).update(changes)
    .then((id) => {
      getPotluckById(id[0]);
  }); 
}

function deletePotluck(id) {
  return db("potlucks").where("id", id).del();
}
