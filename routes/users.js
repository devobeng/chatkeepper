const express = require('express');
const { check } = require('express-validator');
const { userController } = require('../controller/userController');
const { userValidator } = require('../validators/userValidator');
const router = express.Router();

router.route('/').post(userValidator, userController);

module.exports = router;
