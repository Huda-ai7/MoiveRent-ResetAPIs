const express = require("express");
const router = express.Router();
const controller = require("./apiController.js");

// Get all movies
router.get("/movies", controller.getAllMoives);

// Get a particular movie by ID
router.get("/movies/:id", controller.getOneMoive);

// Add a new movie
router.post("/movies", controller.addNewmoive);

// Update a movie
router.put("/movies/:id", controller.updateAMoive);

// Delete a movie
router.delete("/movies/:id", controller.deleteAMoive);

// create new user
router.post("/user", controller.newUser);

// add rented moive
router.post("/user/:moiveId", controller.moiveRent);

module.exports = router;
