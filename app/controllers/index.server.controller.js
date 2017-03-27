exports.render = function(req, res) {
    res.render('index', {
        title: 'Bienvenido a Juggerleague'
    })
};
exports.render = function(req, res) {
    res.render('index', {
        title: 'JUGGERLEAGUE',
        tipo: req.user ? req.user.tipo : ''
    });
};
