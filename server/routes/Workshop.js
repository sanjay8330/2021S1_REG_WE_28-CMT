const router = require('express').Router();
const WorkshopModel = require("../models/workshop");

//The add method - WORKSHOP
router.route("/insertWorkshop").post(async (req, res) => {
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

//Read all workshop details
router.route("/readAllWorkshops").get(async (req, res) => {
    WorkshopModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read workshop details by ID
router.route("/readById/:id").get(async (req, res) => {
    const id = req.params.id;

    WorkshopModel.find({_id:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Update the workshop details
router.route("/update").put(async (req, res) => {
    const workshopDescription = req.body.newworkshopDescription;
    const workshopSpeakers = req.body.newworkshopSpeakers;
    const workshopDate = req.body.newworkshopDate;
    const workshopTime = req.body.newworkshopTime;
    const approvalStatus = req.body.newapprovalStatus;
    const id = req.body.id;

    try{
        await WorkshopModel.findById(id, (err, updatedWorkshopObject) => {
            updatedWorkshopObject.workshopDescription = workshopDescription;
            updatedWorkshopObject.workshopSpeakers = workshopSpeakers;
            updatedWorkshopObject.workshopDate = workshopDate;
            updatedWorkshopObject.workshopTime = workshopTime;
            updatedWorkshopObject.approvalStatus = approvalStatus;
            updatedWorkshopObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 