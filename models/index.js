const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.movies = require("./movie.model.js")(mongoose);
db.categories = require("./category.model.js")(mongoose);

module.exports = db;