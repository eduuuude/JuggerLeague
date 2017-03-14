exports.render = function(req, res) {
    res.render('index', {
        title: 'Bienvenido a Juggerleague'
    })
};
exports.render = function(req, res) {
    res.render('index', {
        title: 'JUGGERLEAGUE',
        user: req.user ? req.user.username : ''
    });
};
