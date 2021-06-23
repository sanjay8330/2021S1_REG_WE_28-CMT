const mongoose = require('mongoose');

const ConferenceWorkshopSchema = new mongoose.Schema({
    conference: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'conference'
    },
    workshops: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'workshops'
    }]
})

const ConferenceWorkshop = mongoose.model("conferenceWorkshops", ConferenceWorkshopSchema);
module.exports = ConferenceWorkshop;