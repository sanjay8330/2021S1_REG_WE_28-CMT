const mongoose = require('mongoose');

/**The workshop details include conductorID, title,objectives,speakers
 * date , time and outcome
  */

const WorkshopSchema = new mongoose.Schema({
    conductorID: {
        type: Number,
        required: true,
    },
    workshopTitle: {
        type: String,
        required: true,
    },
    workshopObjectives: {
        type: String,
        required: true,
    },
    workshopSpeakers: {
        type: String,
        required: true,
    },
    workshopDate: {
        type: String,
        required: true,
    },
    workshopTime: {
        type: String,
        required: true,
    },
    workshopOutcome: {
        type: String,
        required: true,
    },
});

const Workshop = mongoose.model("workshop",WorkshopSchema);
module.exports = Workshop;