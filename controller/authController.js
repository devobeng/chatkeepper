//@route    GET /api/auth
//@desc    Get logged in user
//@access  Private

exports.getAuth = (req, res) => {
	res.send('get Login User');
};

exports.loginUser = (req, res) => {
	res.send('Login User');
};
