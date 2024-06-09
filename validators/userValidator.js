const { check } = require('express-validator');

exports.userValidator = [
	check('name', 'Name is requires').not().isEmpty(),
	check('email', 'Email is required').isEmail(),
	check('password', 'Password is required').isLength({ min: 6 }),
];
