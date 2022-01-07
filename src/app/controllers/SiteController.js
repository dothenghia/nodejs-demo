const Game = require('../models/Game');
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController { // Đặt trùng tên

    // [GET] /
    index(req, res, next){
        Game.find({})
            .then(games => {
                res.render('home', { 
                    games : mutipleMongooseToObject(games)
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }


}

module.exports = new SiteController;