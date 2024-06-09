const express = require('express');
const {
	addContact,
	deleContact,
	updateContact,
	getContact,
	getContacts,
} = require('../controller/contactController');

const router = express.Router();

router.route('/').post(addContact).get(getContacts);
router.route('/:id').delete(deleContact).put(updateContact).get(getContact);
module.exports = router;
