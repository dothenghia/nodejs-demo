const express = require('express');
const router = express.Router();

const gamesController = require('../app/controllers/GameController');

router.get('/create', gamesController.create)
router.post('/store', gamesController.store)
router.get('/:id/edit', gamesController.edit)
router.put('/:id', gamesController.update)
router.patch('/:id/restore', gamesController.restore)
router.delete('/:id', gamesController.destroy)
router.delete('/:id/force', gamesController.forceDestroy)
router.get('/:slug', gamesController.show)


module.exports = router;