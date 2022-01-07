const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/games', meController.storedGames);
router.get('/trash/games', meController.trashGames);

module.exports = router;