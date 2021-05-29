const router = require('express').Router();
const WorkshopModel = require("../models/workshop");

//The add method - WORKSHOP
router.route("/insertWorkshop").post(async (req, res) => {
    const workshopConductorName = req.body.workshopConductorName;
    const workshopConductorEmail = req.body.workshopConductorEmail;
    const workshopConductorPhone = req.body.workshopConductorPhone;
    const workshopTitle = req.body.workshopTitle;
    const workshopDescription = req.body.workshopDescription;
    const workshopSpeakers = req.body.workshopSpeakers;
    const approvalStatus = req.body.approvalStatus;

    const workshop = new WorkshopModel({
        workshopConductorName: workshopConductorName,
        workshopConductorEmail: workshopConductorEmail,
        workshopConductorPhone: workshopConductorPhone,
        workshopTitle: workshopTitle,
        workshopDescription: workshopDescription,
        workshopSpeakers: workshopSpeakers,
        approvalStatus: approvalStatus  
    });

    try{
        await workshop.save();
        console.log("Data inserted successfully!!!");
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
    const workshopConductorName = req.body.workshopConductorName;
    const workshopConductorEmail = req.body.workshopConductorEmail;
    const workshopConductorPhone = req.body.workshopConductorPhone;
    const workshopDescription = req.body.newworkshopDescription;
    const workshopSpeakers = req.body.newworkshopSpeakers;
    const approvalStatus = req.body.newapprovalStatus;
    const id = req.body.id;

    try{
        await WorkshopModel.findById(id, (err, updatedWorkshopObject) => {
            updatedWorkshopObject.workshopConductorName = workshopConductorName;
            updatedWorkshopObject.workshopConductorEmail = workshopConductorEmail;
            updatedWorkshopObject.workshopConductorPhone = workshopConductorPhone;
            updatedWorkshopObject.workshopDescription = workshopDescription;
            updatedWorkshopObject.workshopSpeakers = workshopSpeakers;
            updatedWorkshopObject.approvalStatus = approvalStatus;
            updatedWorkshopObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 