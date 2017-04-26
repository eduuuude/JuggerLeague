var User = require('mongoose').model('User'),
    passport = require('passport');

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
            tipo: req.user ? req.user.tipo : '',
            nombre : req.user ? req.user.username : ''
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
            tipo: ''
        });
};
