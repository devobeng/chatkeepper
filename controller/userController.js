const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
//@route    GET api/users
//@desc     Register a user
//@acess    Public

exports.userController = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { name, email, password } = req.body;
	try {
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: 'User already exist' });
		}
		user = new User({ name, email, password });
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		await user.save();
		const payload = {
			user: {
				id: user.id,
			},
		};
		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{
				expiresIn: 360000,
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.log(err.message);
		return res.status(500).json({ message: 'server error' });
	}
};
