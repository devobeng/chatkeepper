const express = require('express');
const { getAuth, loginUser } = require('../controller/authController');
const router = express.Router();

router.route('/').get(getAuth).post(loginUser);

module.exports = router;
