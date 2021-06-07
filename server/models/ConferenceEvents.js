import mongoose from 'mongoose';

const ConferenceEventSchema = new mongoose.Schema({
    conferenceID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'conference'
    },
    research: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'research'
    }],
    workshop: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'workshops'
    }],
    allocatedTime: {
        type: Number,
        required: true
    },
    adminApprovalStatus: {
        type: String,
        required: true,
        trim: true
    }

})

const ConferenceEvent = mongoose.model("conferenceEvents", ConferenceEventSchema);
module.exports = ConferenceEvent;