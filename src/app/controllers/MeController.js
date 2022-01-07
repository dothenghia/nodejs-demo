const Game = require('../models/Game');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController { // Đặt trùng tên

    // [GET] /me/stored/games
    storedGames(req, res, next){

        let gameQuery = Game.find({});

        if (req.query.hasOwnProperty('_sort')) {
            gameQuery = gameQuery.sort({
                [req.query.column] : req.query.type
            })
        }

        Promise.all([gameQuery , Game.countDocumentsDeleted()])
            .then(([games , deletedCount]) => {
                res.render('me/stored-games' , {
                    deletedCount,
                    games : mutipleMongooseToObject(games),
                })
            })
            .catch(next)

        // Game.countDocumentsDeleted()
        //     .then((deletedCount) => {
        //         deletedCount
        //     })
        //     .catch(()=>{})

        // Game.find({})
        //     .then(games => res.render('me/stored-games', {
        //         games : mutipleMongooseToObject(games)
        //     }))
        //     .catch(next)
    
    }

    // [GET] /me/trash/games
    trashGames(req, res, next){
        Game.findDeleted({})
            .then(games => res.render('me/trash-games', {
                games : mutipleMongooseToObject(games)
            }))
            .catch(next)
    
    }


}

module.exports = new MeController;