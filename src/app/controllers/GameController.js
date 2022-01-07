const Game = require('../models/Game');
const { mongooseToObject } = require('../../util/mongoose')

class GameController { // Đặt trùng tên

    // [GET] /games/:slug
    show(req, res, next){
        Game.findOne({slug : req.params.slug})
            .then(game => 
                res.render('games/show', { game: mongooseToObject(game)})
            )
            .catch(next);
        
    }

    // [GET] /games/create
    create(req, res, next){
        res.render('games/create');
        
    }
    
    // [POST] /games/store
    store(req, res, next){
        const game = new Game(req.body);
        game.save()
            .then(()=> res.redirect('/me/stored/games'))
            .catch(error => {

            });
    }

    // [GET] /games/:id/edit
    edit(req, res, next){
        Game.findById(req.params.id)
            .then(game =>
                res.render('games/edit', { game: mongooseToObject(game)})
            )
            .catch(next);
    }

    // [PUT] /games/:id
    update(req, res, next){
        Game.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/games'))
            .catch(next);
    }

    // [DELETE] /games/:id
    destroy(req, res, next){
        Game.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /games/:id/force
    forceDestroy(req, res, next){
        Game.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /games/:id/restore
    restore(req, res, next){
        Game.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }


    

}

module.exports = new GameController;