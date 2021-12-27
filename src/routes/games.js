const express = require('express');
const router = express.Router();

const gamesController = require('../app/controllers/GamesController');

router.use('/:slug', gamesController.show)
router.use('/', gamesController.index)  // index ben file GamesController


module.exports = router;