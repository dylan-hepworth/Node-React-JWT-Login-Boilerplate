'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsersController');

router.post('/authenticate', controller.authenticate);
router.post('/register', controller.register);
router.get('/', controller.getAll);
router.get('/:_id', controller.getById);
router.get('/current', controller.getCurrent);
router.put('/:_id', controller.update);
router.delete('/:_id', controller.delete);

module.exports = router;