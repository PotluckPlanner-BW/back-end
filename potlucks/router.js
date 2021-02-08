const express = require("express");
const router = express.Router();
const Potlucks = require("./model");
const restricted = require("../middleware/restricted");

router.get("/", async (req, res, next) => {
  try {
    const potluck = await Potlucks.getAllPotlucks();
    res.status(200).json(potluck);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const potlucks = await Potlucks.getPotluckById(id);
    if (!potlucks) {
      return res.status(404).json({ message: "potluck not found" });
    }
    res.status(200).json(potlucks);
  } catch (err) {
    next(err);
  }
});

router.get("/userid/:id", async (req, res, next) => {
  try {
    const potluck = await Potlucks.getPotluckByUserId(req.params.id);

    if (!potluck) {
      return res
        .status(404)
        .json({ message: "no potlucks found for this user" });
    }

    res.status(200).json(potluck);
  } catch (err) {
    next(err);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const potluck = req.body;

    if (!potluck.potluck) {
      res.status(400).json({
        message:
          "required field(s) missing. Please try again with all required fields.",
      });
    }
    await Potlucks.addPotluck(potlucks);
    console.log(potlucks);
    res.status(201).json({ Created: potlucks });
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const changes = req.body;
    if (!changes.id || !changes.potlucks) {
      return res.status(400).json({
        message:
          "required field(s) missing. Please try again with all required fields.",
      });
    }
    const newPotluck = await Potlucks.updatePotluck(id, changes);
    res.status(202).json(newPotluck);
  } catch (err) {
    next(err);
  }
});

router.delete("/delete/:id", restricted, async (req, res, next) => {
  try {
    const id = req.params.id;
    await Potlucks.deletePotluck(id);
    res.status(202).json({ message: "Potluck is gone" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
