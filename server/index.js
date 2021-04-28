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
const WorkshopModel = require("./models/workshop");

//The add method - USER + WORKSHOP
app.post("/insert", async (req, res) => {
    const userID = req.body.userID;
    const userType = req.body.userType;
    const userName = req.body.userName;
    const userContact = req.body.userContact;
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;

    const workshopTitle = req.body.workshopTitle;
    const workshopDescription = req.body.workshopDescription;
    const workshopSpeakers = req.body.workshopSpeakers;
    const workshopDate = req.body.workshopDate;
    const workshopTime = req.body.workshopTime;
    const approvalStatus = req.body.approvalStatus;


    const user = new UserModel({
        userID: userID,
        userType: userType,
        userName: userName,
        userContact: userContact,
        userEmail: userEmail,
        userPassword: userPassword
    });

    const workshop = new WorkshopModel({
        userID: userID,
        workshopTitle: workshopTitle,
        workshopDescription: workshopDescription,
        workshopSpeakers: workshopSpeakers,
        workshopDate: workshopDate,
        workshopTime: workshopTime,
        approvalStatus: approvalStatus  
    });

    try{
        await user.save();
        await workshop.save();
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//The add method - WORKSHOP
app.post("/insertWorkshop", async (req, res) => {
    const userID = req.body.userID;
    const workshopTitle = req.body.workshopTitle;
    const workshopDescription = req.body.workshopDescription;
    const workshopSpeakers = req.body.workshopSpeakers;
    const workshopDate = req.body.workshopDate;
    const workshopTime = req.body.workshopTime;
    const approvalStatus = req.body.approvalStatus;

    const workshop = new WorkshopModel({
        userID: userID,
        workshopTitle: workshopTitle,
        workshopDescription: workshopDescription,
        workshopSpeakers: workshopSpeakers,
        workshopDate: workshopDate,
        workshopTime: workshopTime,
        approvalStatus: approvalStatus  
    });

    try{
        await workshop.save();
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Connection to mongoose
mongoose.connect("mongodb+srv://AF:sanjay-8330@cmt.g1xsc.mongodb.net/CMTDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//Running on the server
app.listen(3001,() => {
    console.log("Server is started and running on 3001");
})

