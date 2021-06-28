const router = require('express').Router();
const WorkshopModel = require("../models/workshop");

//The add method - WORKSHOP - used by the Workshop conductor
router.route("/insertWorkshop").post(async (req, res) => {
    const workshopConductorName = req.body.workshopConductorName;
    const workshopConductorEmail = req.body.workshopConductorEmail;
    const workshopConductorPhone = req.body.workshopConductorPhone;
    const workshopTitle = req.body.workshopTitle;
    const workshopDescription = req.body.workshopDescription;
    const workshopSpeakers = req.body.workshopSpeakers;
    const approvalStatus = req.body.approvalStatus;
    const downloadURL = req.body.downloadURL;

    const workshop = new WorkshopModel({
        workshopConductorName: workshopConductorName,
        workshopConductorEmail: workshopConductorEmail,
        workshopConductorPhone: workshopConductorPhone,
        workshopTitle: workshopTitle,
        workshopDescription: workshopDescription,
        workshopSpeakers: workshopSpeakers,
        approvalStatus: approvalStatus,
        downloadURL: downloadURL
    });

    try{
        await workshop.save();
        console.log("Data inserted successfully!!!");
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Read all workshop details - used by the reviewer
router.route("/readAllWorkshops").get(async (req, res) => {
    WorkshopModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read all approved workshop details - used by the admin
router.route("/readAllApprovedWorkshops").get(async (req, res) => {
    WorkshopModel.find({approvalStatus: 'Approved'}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read all unapproved workshop details - used by the admin
router.route("/readAllUnApprovedWorkshops").get(async (req, res) => {
    WorkshopModel.find({approvalStatus: 'Approval Pending'}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read workshop details by ID - used by the reviewer to approve/decline
router.route("/readById/:id").get(async (req, res) => {
    const id = req.params.id;

    WorkshopModel.find({_id:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Update the Workshop details - used by reviewer
router.route("/approveOrDecline/:id").put(async (req, res) => {
    const approvalStatus = req.body.approvalStatus;
    const workshopAmount = req.body.workshopAmount;
    //Research paper or workshop ID
    const id = req.params.id;

    try{
        await WorkshopModel.findById(id, (err, updatedWorkshopObject) => {
            updatedWorkshopObject.approvalStatus = approvalStatus;
            updatedWorkshopObject.workshopAmount = workshopAmount;
            updatedWorkshopObject.save()
            .then(response => {
                res.status(200).send({response: response});
            }).catch(error => {
                res.status(500).send({error: error.message});
            })
        });
    }catch(err){
        console.log(err);
    }
});

//Changed dueo to admin task
//Update the Workshop details - used by admin
/*router.route("/adminApproveOrDecline/:id").put(async (req, res) => {
    const adminApprovalStatus = req.body.adminApprovalStatus;
    //Research paper or workshop ID
    const id = req.params.id;

    try{
        await WorkshopModel.findById(id, (err, updatedWorkshopObject) => {
            updatedWorkshopObject.adminApprovalStatus = adminApprovalStatus;
            updatedWorkshopObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

//Update the Workshop details - used by editor to add the date and time of workshop
router.route("/addWorkshopDateTime/:id").put(async (req, res) => {
    const workshopDate = req.body.workshopDate;
    const workshopTime = req.body.workshopTime;
    //workshop ID
    const id = req.params.id;

    try{
        await WorkshopModel.findById(id, (err, updatedWorkshopObject) => {
            updatedWorkshopObject.workshopDate = workshopDate;
            updatedWorkshopObject.workshopTime = workshopTime;
            updatedWorkshopObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});*/

//Delete Workshop by ID - In case its declined
router.route("/deleteById/:id").get(async (req, res) => {
    const id = req.params.id;

    WorkshopModel.findByIdAndRemove({_id: id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

module.exports = router; 