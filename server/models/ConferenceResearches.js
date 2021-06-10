const mongoose = require('mongoose');

const ConferenceResearchSchema = new mongoose.Schema({
    conference: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'conference'
    },
    researches: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'research'
    }]
})

const ConferenceResearch = mongoose.model("conferenceResearches", ConferenceResearchSchema);
module.exports = ConferenceResearch;