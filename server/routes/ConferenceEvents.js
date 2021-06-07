const router = require('express').Router();
const ConferenceEventModel = require('../models/ConferenceEvents');

//The add method - Conference - Event (Workshop/Research) - Editor
router.route("/insertConferenceEvent").post(async (req, res) => {
    const conferenceID = req.body.conferenceID;
    const research = req.body.research;
    const workshop = req.body.workshop;
    const allocatedTime = req.body.allocatedTime;
    const adminApprovalStatus = req.body.adminApprovalStatus;

    const conferenceEvent = new ConferenceEventModel({
        conferenceID: conferenceID,
        research: research,
        workshop: workshop,
        allocatedTime: allocatedTime,
        adminApprovalStatus: adminApprovalStatus,
    });

    try{
        await conferenceEvent.save();
        console.log("Data inserted successfully!!!");
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Read all conference details - Admin view all conferences
router.route("/readAllConferenceEvents").get(async (req, res) => {
    ConferenceEventModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read a particular conference detail - All workshops - For Attendees
router.route("/readConferenceWorkshops/:id").get(async (req, res) => {
    const id = req.params.id;

    await ConferenceEventModel.find({conferenceID:id, adminApprovalStatus: 'Approved'})
    .populate('workshop', 'workshopTitle workshopDescription')
    .then(data => {
        res.status(200).send({data: data.workshop});
    }).catch(error => {
        res.status(500).send({error: error.message});
    })
});

//Read a particular conference detail - All research - For Attendees
router.route("/readConferenceResearch/:id").get(async (req, res) => {
    const id = req.params.id;

    await ConferenceEventModel.find({conferenceID:id, adminApprovalStatus: 'Approved'})
    .populate('research', 'researchTitle researchDescription')
    .then(data => {
        res.status(200).send({data: data.research});
    }).catch(error => {
        res.status(500).send({error: error.message});
    })
});

//Read conference by ID - used by the Admin - view all events in a particular conference
router.route("/readById/:id").get(async (req, res) => {
    const id = req.params.id;

    ConferenceModel.find({conferenceID:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Delete conference by ID - In case the conference is declined - Admin
router.route("/deleteById/:id").get(async (req, res) => {
    const id = req.params.id;

    ConferenceModel.findByIdAndRemove({conferenceID: id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Update the conference details - used by Admin - Approve/decline the events
router.route("/approveOrDecline/:id").put(async (req, res) => {
    const adminApprovalStatus = req.body.adminApprovalStatus;
    //Research paper or workshop ID
    const id = req.params.id;

    try{
        await ConferenceModel.findById(id, (err, updatedConferenceEventObject) => {
            updatedConferenceEventObject.adminApprovalStatus = adminApprovalStatus;
            updatedConferenceEventObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 