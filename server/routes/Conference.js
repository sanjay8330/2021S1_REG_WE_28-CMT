const router = require('express').Router();
const ConferenceModel = require('../models/Conference');

//The add method - Conference - Event (Workshop/Research) - Editor
router.route("/insertConference").post(async (req, res) => {
    if(req.body){
        const Conference = new ConferenceModel(req.body);
        await Conference.save()
        .then(data => {
            res.status(200).send({data: data});
        }).catch(error => {
            res.status(500).send({error: error});
        })
    }
});

//Read all conference details - Admin view all conferences
router.route("/readAllConferences").get(async (req, res) => {
    await ConferenceModel.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error });
        })
});

//Read conference by ID - used by the Admin - view all events in a particular conference
router.route("/readById/:id").get(async (req, res) => {
    if (req.params && req.params.id) {
        await ConferenceModel.findById(req.params.id)
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error });
            })
    }
});

//Delete conference by ID - In case the conference is declined - Admin
router.route("/deleteById/:id").get(async (req, res) => {
    const id = req.params.id;

    ConferenceModel.findByIdAndRemove({ conferenceID: id }, (error, result) => {
        if (error) {
            res.send(error);
        }

        res.send(result)
    })
});

module.exports = router;