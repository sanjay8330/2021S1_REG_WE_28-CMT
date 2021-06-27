const mongoose = require('mongoose');

/**The conference details - Section 01
 * The research paper/workshop details - Section 2
 * The workshop & research fields are foreign keys
  */

const ConferenceSchema = new mongoose.Schema({
    conferenceTitle: {
        type: String,
        required: true,
        trim: true,
    },
    conferenceBriefing: {
        type: String,
        required: true,
        trim: true,
    },
    conferenceDate: {
        type: String,
        required: true,
        trim: true,
    },
    conferenceTime: {
        type: String,
        required: true,
        trim: true,
    }
});

const Conference = mongoose.model("conference", ConferenceSchema);
module.exports = Conference;