const { validationResult, check } = require('express-validator');
//@route    GET api/users
//@desc     Register a user
//@acess    Public

exports.userController =
	([
		check('name', 'Name is requires').not().isEmpty(),
		check('email', 'Email is reuired').isEmail(),
		check('password', 'Password is required').isLength({ min: 6 }),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		res.send('get registered user');
	});
