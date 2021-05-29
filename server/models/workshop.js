const mongoose = require('mongoose');

/**The workshop details include conductorID, title,objectives,speakers
 * date , time and outcome
  */

/**The Workshopflyer ulpoad should be included */
const WorkshopSchema = new mongoose.Schema({
    workshopConductorName: {
        type: String,
        required: true,
        trim: true,
    },
    workshopConductorEmail: {
        type: String,
        required: true,
        trim: true,
    },
    workshopConductorPhone: {
        type: String,
        required: true,
        trim: true,
    },
    workshopTitle: {
        type: String,
        required: true,
        trim: true,
    },
    workshopDescription: {
        type: String,
        required: true,
        trim: true,
    },
    workshopSpeakers: {
        type: String,
        required: true,
        trim: true,
    },
    approvalStatus: {
        type: String,
        required: false,
        trim: true,
    },
});

const Workshop = mongoose.model("workshops",WorkshopSchema);
module.exports = Workshop;