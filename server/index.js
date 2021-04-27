//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Creating an app from express
const app = express();

//Getting the output as a JSON fro the app
app.use(express.json());
app.use(cors());

const UserModel = require("./models/user");

//The add method
app.post("/insert", async (req, res) => {
    const userID = req.body.userID;
    const userType = req.body.userType;
    const userName = req.body.userName;
    const userContact = req.body.userContact;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const user = new UserModel({userID: userID,userType: userType,userName: userName,userContact: userContact,userEmail: userEmail,userPassword: userPassword});

    try{
        await user.save();
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Connection to mongoose
mongoose.connect("mongodb+srv://sanjay-8330:sanjay-8330@conferencemanagementtoo.cxqzv.mongodb.net/test", {
    useNewUrlParser: true,
})

//Running on the server
app.listen(3001,() => {
    console.log("Server is started and running on 3001");
})

