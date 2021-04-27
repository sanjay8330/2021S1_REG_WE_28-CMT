//Imports
const express = require('express');
const mongoose = require('mongoose');

//Creating an app from express
const app = express();

//Getting the output as a JSON fro the app
app.use(express.json());

//Connection to mongoose
mongoose.connect("mongodb+srv://sanjay-8330:sanjay-8330@conferencemanagementtoo.cxqzv.mongodb.net/test", {
    useNewUrlParser: true,
})

//Running on the server
app.listen(3001,() => {
    console.log("Server is started and running on 3001");
})

