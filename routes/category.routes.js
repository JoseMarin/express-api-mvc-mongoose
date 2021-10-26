const express = require('express');
const router = express.Router();

//Importo Controllers
const categories = require("../controllers/category.controller");
  
router.post("/", categories.create); // Create a new category
router.get("/", categories.findAll); // Retrieve all categories
router.get("/:id", categories.findOne); // Retrieve a single category with id
router.put("/:id", categories.update); // Update a category with id
router.delete("/:id", categories.delete); // Delete a category with id
router.delete("/", categories.deleteAll); // Create a new category
  

module.exports = router;