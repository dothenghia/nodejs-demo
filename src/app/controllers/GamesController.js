class GamesController { // Đặt trùng tên

    // [GET] /games
    index(req, res){
        res.render('games');
    }

    // [GET] /games/:slug
    show(req, res){
        res.send('NEW GAMES  !!!');
    }


}

module.exports = new GamesController;