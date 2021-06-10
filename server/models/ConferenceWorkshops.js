const mongoose = require('mongoose');

const ConferenceWorkshopSchema = new mongoose.Schema({
    conference: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    workshops: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false
    }]
})

const ConferenceWorkshop = mongoose.model("conferenceWorkshops", ConferenceWorkshopSchema);
module.exports = ConferenceWorkshop;