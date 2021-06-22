const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        trim: true
    },
    userCategory: {
        type: String,
        required: true,
        trim: true
    },
    userEmail: {
        type: String,
        required: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: true,
        trim: true
    },
    userContact: {
        type: String,
        required: true,
        trim: true
    },
});

const User = mongoose.model("Users", UserSchema);
module.exports = User;