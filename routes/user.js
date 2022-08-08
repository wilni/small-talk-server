const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const path = require('path');
const usersController = require('../controllers/usersController.js');

router.route('/')
.get(usersController.getUser)
.post(usersController.createUser);


module.exports = router;