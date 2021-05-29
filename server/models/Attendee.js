const mongoose = require('mongoose');

/**The attendee details - Section 01
 * The conference details - Section 2
 * The payment details - Section 3
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
    paymentDate: {
        type:Date,
        required: true,
        trim: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    paymentAccountNo: {
        type: Number,
        required: true,
    },
});

const Attendee = mongoose.model("attendees",AttendeeSchema);
module.exports = Attendee;