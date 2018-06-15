const config = require('config.json');
const userService = require('../services/users');
const controller = {};

controller.authenticate = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ error: 'Username or password is incorrect' }))
        .catch(err => next(err));
};

controller.register = (req, res, next) => {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
};

controller.getById = (req, res, next) => {
    userService.getById(req.params._id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
};

controller.getAll = (req, res, next) => {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
};

controller.getCurrent = (req, res, next) => {
    userService.getById(req.params.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
};

controller.update = (req, res, next) => {
    userService.update(req.params._id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
};

controller.delete = (req, res, next) => {
    userService.delete(req.params._id)
        .then(() => res.json({}))
        .catch(err => next(err));
};

module.exports = controller;