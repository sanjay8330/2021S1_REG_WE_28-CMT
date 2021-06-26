const router = require('express').Router();
const ResearchModel = require('../models/research');

//The add method - Attendee
router.route("/insertResearch").post(async (req, res) => {
    const authorName = req.body.authorName;
    const authorEmail = req.body.authorEmail;
    const authorContact = req.body.authorContact;
    const researchTitle = req.body.researchTitle;
    const researchDescription = req.body.researchDescription;
    const approvalStatus = req.body.approvalStatus;
    const downloadURL = req.body.downloadURL;
    const adminApprovalStatus = req.body.adminApprovalStatus;

    const research = new ResearchModel({
        authorName: authorName,
        authorEmail: authorEmail,
        authorContact: authorContact,
        researchTitle: researchTitle,
        researchDescription: researchDescription,
        approvalStatus: approvalStatus,
        downloadURL: downloadURL,
        adminApprovalStatus: adminApprovalStatus,
    });

    try{
        await research.save();
        console.log("Data inserted successfully!!!");
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Read all research details - used by reviewer
router.route("/readAllResearch").get(async (req, res) => {
    ResearchModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read Research by ID - used by the reviewer
router.route("/readById/:id").get(async (req, res) => {
    const id = req.params.id;

    ResearchModel.find({_id:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Delete Research by ID - In case its declined
router.route("/deleteById/:id").get(async (req, res) => {
    const id = req.params.id;

    ResearchModel.findByIdAndRemove({_id: id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Update the Research details - used by reviewer
router.route("/approveOrDecline/:id").put(async (req, res) => {
    const approvalStatus = req.body.approvalStatus;
    const researchAmount = req.body.researchAmount;
    //Research paper or workshop ID
    const id = req.params.id;

    try{
        await ResearchModel.findById(id, (err, updatedResearchObject) => {
            updatedResearchObject.approvalStatus = approvalStatus;
            updatedResearchObject.researchAmount = researchAmount;
            updatedResearchObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

//Update the Research details - used by admin
router.route("/adminApproveOrDecline/:id").put(async (req, res) => {
    const adminApprovalStatus = req.body.adminApprovalStatus;
    //Research paper or workshop ID
    const id = req.params.id;

    try{
        await ResearchModel.findById(id, (err, updatedResearchObject) => {
            updatedResearchObject.adminApprovalStatus = adminApprovalStatus;
            updatedResearchObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

//Update the Research details - used by editor to add the reseach date and time at conference
router.route("/addResearchDateTime/:id").put(async (req, res) => {
    const researchDate = req.body.researchDate;
    const researchTime = req.body.researchTime;
    //Research paper ID
    const id = req.params.id;

    try{
        await ResearchModel.findById(id, (err, updatedResearchObject) => {
            updatedResearchObject.researchDate = researchDate;
            updatedResearchObject.researchTime = researchTime;
            updatedResearchObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 