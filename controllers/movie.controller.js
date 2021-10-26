const db = require("../models");
const Movie = db.movies;

const MovieController = {}; //Create the object controller

//CRUD end-points Functions
//-------------------------------------------------------------------------------------
// Create and Save a new Movie
MovieController.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Movie
  const movie = new Movie({
    title: req.body.title,
    categoryId: req.body.categoryId,
    available: req.body.available ? req.body.available : false
  });

  // Save Movie in the database
  movie
    .save(movie)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


//-------------------------------------------------------------------------------------
// Retrieve all Movies from the database.
MovieController.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Movie.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Movies."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find a single Movie with an id
MovieController.findOne = (req, res) => {
  const id = req.params.id;

  Movie.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Movie with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Movie with id=" + id });
    });
};


//-------------------------------------------------------------------------------------
// Update a Movie by the id in the request
MovieController.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Movie.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Movie with id=${id}. Maybe Movie was not found!`
        });
      } else res.send({ message: "Movie was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Movie with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete a Movie with the specified id in the request
MovieController.delete = (req, res) => {
  const id = req.params.id;

  Movie.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Movie with id=${id}. Maybe Movie was not found!`
        });
      } else {
        res.send({
          message: "Movie was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Movie with id=" + id
      });
    });
};


//-------------------------------------------------------------------------------------
// Delete all Movies from the database.
MovieController.deleteAll = (req, res) => {
    Movie.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Movies were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Movies."
      });
    });
};


//-------------------------------------------------------------------------------------
// Find all published Tutorials
MovieController.findAllAvailable = (req, res) => {
    Movie.find({ available: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Movies."
      });
    });
};

module.exports = MovieController;