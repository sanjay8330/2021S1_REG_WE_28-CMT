const router = require('express').Router();
const ConferenceWorkshopModel = require('../models/ConferenceWorkshops');

//Insert Workshops to the conference - Editor
router.route('/insertConferenceWorkshops').post(async (req, res) => {

    if (req.body) {
        const ConferenceWorkshops = new ConferenceWorkshopModel(req.body);
        await ConferenceWorkshops.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
});

//Insert Workshops to the conference - Editor
router.route('/getConferenceWorkshops/:id').get(async (req, res) => {

    if (req.params && req.params.id) {
        await ConferenceWorkshopModel.findById(req.params.id)
        .populate('workshops', 'workshopTitle workshopDescription')
        .then(data => {
            res.status(200).send({data: data.workshops});
        }).catch(error => {
            res.status(500).send({error: error.message});
        })
    }
});

module.exports = router;