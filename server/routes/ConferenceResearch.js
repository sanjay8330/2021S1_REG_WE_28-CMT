const router = require('express').Router();
const ConferenceResearchModel = require('../models/ConferenceResearches');

//Insert Workshops to the conference - Editor
router.route('/insertConferenceResearches').post(async (req, res) => {

    if (req.body) {
        const ConferenceResearches = new ConferenceResearchModel(req.body);
        await ConferenceResearches.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
});

//In case need to pick all the researches in conference use = find({conference: req.params.id})
//Insert Workshops to the conference - Editor
router.route('/getConferenceResearches/:id').get(async (req, res) => {

    if (req.params && req.params.id) {
        await ConferenceResearchModel.findById(req.params.id)
        .populate('researches', 'researchTitle researchDescription')
        .then(data => {
            res.status(200).send({researches: data.researches});
        }).catch(error => {
            res.status(500).send({error: error.message});
        })
    }
});

module.exports = router;