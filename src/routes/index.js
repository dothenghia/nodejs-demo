const gamesRouter = require('./games');
const meRouter = require('./me');
const siteRouter = require('./site');


function route(app){

    app.use('/games', gamesRouter);
    app.use('/me', meRouter);
    
    app.use('/', siteRouter);

    
    // app.get('/', (req, res) => {
    //     res.render('home');
    // })
    
    // app.get('/games', (req, res) => {
    //     res.render('games');
    // })
    
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })
    

}

// Chuẩn qui ước
module.exports = route;