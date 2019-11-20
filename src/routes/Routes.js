const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

router.get('/users', useuserController.getUsers);

module.exports = router;