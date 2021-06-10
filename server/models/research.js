const mongoose = require('mongoose');

/**The research author details - Section 01
 * The research paper details - Section 2
  */

const ResearchSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        trim: true,
    },
    authorEmail: {
        type: String,
        required: true,
        trim: true,
    },
    authorContact: {
        type: String,
        required: true,
        trim: true,
    },
    researchTitle: {
        type: String,
        required: true,
        trim: true,
    },
    researchDescription: {
        type: String,
        required: true,
        trim: true,
    },
    approvalStatus: {
        type: String,
        required: true,
        trim: true,
    },
    downloadURL: {
        type: String,
        required:true,
        trim: true
    },
    researchDate: {
        type: String,
        required: false,
        trim: true,
    },
    researchTime: {
        type: String,
        required: false,
        trim: true,
    },
    adminApprovalStatus: {
        type: String,
        required: false,
        trim: true,
    } 
});

const Research = mongoose.model("research", ResearchSchema);
module.exports = Research;