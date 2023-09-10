const express = require('express');
const router = express.Router();
const {createContact, getContact, getContacts, deleteContact, updateContact} = require('../Controllers/contactController.js')


// get all users
router.get('/contacts', getContacts);

// get route for one specific user
router.get("/:id", getContact)

//post user
router.post('/',  createContact);

// delete Route

router.delete("/:id" ,deleteContact)

// Patch Route 
router.patch("/:id", updateContact )


module.exports = router;