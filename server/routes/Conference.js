const router = require('express').Router();
const ConferenceModel = require('../models/Conference');

//The add method - Conference - Event (Workshop/Research) - Editor
router.route("/insertConference").post(async (req, res) => {
    const conferenceID = req.body.conferenceID;
    const conferenceTitle = req.body.conferenceTitle;
    const conferenceDate = req.body.conferenceDate;
    const conferenceTime = req.body.conferenceTime;

    const conference = new ConferenceModel({
        conferenceID: conferenceID,
        conferenceTitle: conferenceTitle,
        conferenceDate: conferenceDate,
        conferenceTime: conferenceTime,
    });

    try{
        await conference.save();
        console.log("Data inserted successfully!!!");
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Read all conference details - Admin view all conferences
router.route("/readAllConferences").get(async (req, res) => {
    ConferenceModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
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
/*router.route("/approveOrDecline").put(async (req, res) => {
    const adminapprovalStatus = req.body.adminapprovalStatus;
    //Research paper or workshop ID
    const id = req.body.id;

    try{
        await ConferenceModel.findById(id, (err, updatedConferenceObject) => {
            updatedConferenceObject.adminapprovalStatus = adminapprovalStatus;
            updatedConferenceObject.save();
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});*/

module.exports = router; 