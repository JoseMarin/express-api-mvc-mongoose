const router = require('express').Router();

//Importamos Routes definidas en views
const MovieRouter = require('./routes/movie.routes');
const CategoryRouter = require('./routes/category.routes');

//Rutas
router.use('/movie', MovieRouter);
router.use('/category', CategoryRouter);

module.exports = router;