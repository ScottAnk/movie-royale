const express = require('express')
const router = express.Router()

const movieCtrl = require('../../controllers/api/movies')

// api/movies
router.get('/', movieCtrl.getMovies)

module.exports = router
