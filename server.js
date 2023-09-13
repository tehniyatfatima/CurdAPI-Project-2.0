
const express = require('express');
const dotenv = require('dotenv').config()
const contactsRoutes = require('./routes/contactsRoutes.js')

const App = express();
const port = process.env.PORT || 5000;

App.use(express.json())
App.use(contactsRoutes)


// app is listening
App.listen(port,() =>{
    console.log(`server is running on http://localhost:${port}`)
})