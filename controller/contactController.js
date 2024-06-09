//@route    GET api/contacts
//@desc     Get all contacts
//@acess    Public

exports.getContacts = (req, res) => {
	res.send('get all users');
};
exports.getContact = (req, res) => {
	const id = req.params.id;
	res.send(` contact for ${id}`);
};

exports.addContact = (req, res) => {
	res.send('add contact');
};

exports.deleContact = (req, res) => {
	const id = req.params.id;
	res.send(` contact deleted for ${id}`);
};

exports.updateContact = (req, res) => {
	const id = req.params.id;
	res.send(` contact updated for ${id}`);
};
