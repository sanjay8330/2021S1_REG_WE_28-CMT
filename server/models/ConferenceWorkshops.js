const mongoose = require('mongoose');

const ConferenceWorkshopSchema = new mongoose.Schema({
    conference: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'conference'
    },
    workshops: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'workshops'
    },
    allocatedTime: {
        type: String,
        required: false,
        trim: true
    },
    adminApprovalStatus: {
        type: String,
        required: false,
        trim: true
    }
})

const ConferenceWorkshop = mongoose.model("conferenceWorkshops", ConferenceWorkshopSchema);
module.exports = ConferenceWorkshop;