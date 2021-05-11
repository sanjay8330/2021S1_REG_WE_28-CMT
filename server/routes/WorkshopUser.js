const router = require('express').Router();
const UserModel = require("../models/user");
const WorkshopModel = require("../models/workshop");

//The add method - USER + WORKSHOP
router.route("/insert").post(async (req, res) => {
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
        console.log("Data Inserted Successfully!!!");
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 
