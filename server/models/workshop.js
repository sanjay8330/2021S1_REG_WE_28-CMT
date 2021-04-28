const mongoose = require('mongoose');

/**The workshop details include conductorID, title,objectives,speakers
 * date , time and outcome
  */

const WorkshopSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true,
    },
    workshopTitle: {
        type: String,
        required: true,
    },
    workshopDescription: {
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
    approvalStatus: {
        type: String,
        required: false,
    },
});

const Workshop = mongoose.model("workshops",WorkshopSchema);
module.exports = Workshop;