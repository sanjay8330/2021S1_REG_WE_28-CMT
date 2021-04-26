const mongoose = require('mongoose');

/**The user details (researcher, workshop conductor, reviewer and editor with the admin)
 * basic information and type (important)
  */

const UserSchema = new mongoose.Schema({
    userID: {
        type: Number,
        required: true,
    },
    userType: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    userContact: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
    userUsername: {
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("users",UserSchema);
module.exports = User;