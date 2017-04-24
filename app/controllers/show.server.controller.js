var User = require('mongoose').model('User'),
    passport = require('passport');

var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }

    return message;
};
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        }
        else {
            res.json(users);
        }
    });
};

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};

exports.renderCalendario = function(req, res, next) {
    if (req.user) {
        res.render('calendario', {
            title: 'Calendario',
            tipo: req.user ? req.user.tipo : ''
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.renderStreaming = function(req, res, next) {
    if (req.user) {
        res.render('streaming', {
            title: 'Streaming',
            tipo: req.user ? req.user.tipo : ''
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.renderCombates = function(req, res, next) {
    if (req.user) {
        res.render('combates', {
            title: 'Combates',
            tipo: req.user ? req.user.tipo : ''
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.renderClasificacion = function(req, res, next) {
    if (req.user) {
        res.render('clasificacion', {
            title: 'Clasificacion',
            tipo: req.user ? req.user.tipo : ''
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.renderEnDirecto = function(req, res, next) {
        res.render('endirecto', {
            title: 'En directo',
            tipo: req.user ? req.user.tipo : ''
        });
};
