const express = require('express');
const router = express.Router();

//Importo Controllers
const movies = require("../controllers/movie.controller");
  
router.post("/", movies.create); // Create a new movie
router.get("/", movies.findAll); // Retrieve all movies
router.get("/available", movies.findAllAvailable); // Retrieve all available movies
router.get("/:id", movies.findOne); // Retrieve a single movie with id
router.put("/:id", movies.update); // Update a movie with id
router.delete("/:id", movies.delete); // Delete a movie with id
router.delete("/", movies.deleteAll); // Create a new movie
  

module.exports = router;