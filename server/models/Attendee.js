const mongoose = require('mongoose');

/**The user details (researcher, workshop conductor, reviewer and editor with the admin)
 * basic information and type (important)
  */

const AttendeeSchema = new mongoose.Schema({
    attendeeName: {
        type: String,
        required: true,
    },
    attendeeEmail: {
        type: String,
        required: true,
    },
    attendeeContact: {
        type: String,
        required: true,
    },
});

const Attendee = mongoose.model("attendees",AttendeeSchema);
module.exports = Attendee;