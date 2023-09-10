const express = require('express');
const router = express.Router();
const {createContact, getContact, getContacts, deleteContact, updateContact} = require('../Controllers/contactController.js')


// get all users
router.get('/contacts', getContacts);

// get route for one specific user
router.get("/contact/:id", getContact)

//post user
router.post('/postcontact',  createContact);

// delete Route

router.delete("/deletecontact/:id" ,deleteContact)

// Patch Route 
router.patch("/updatecontact/:id", updateContact )


module.exports = router;