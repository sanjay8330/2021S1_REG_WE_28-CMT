const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const Research = require('../../models/research');

jest.setTimeout(100000);

let researchId = '';

beforeAll(async () => {
    //delete already exist Research Papers on CMT Test database
    await Research.deleteMany();
});

//Test the Research Paper API - KASUNI
test('should insert a new Research paper', async () => {

    await request(app).post('/research/insertResearch').send({

        authorName: "Anu",
        authorEmail: "anu@gmail.com",
        authorContact: "0773458882",
        researchTitle: "AF",
        researchDescription: "Application Framework",
        approvalStatus: "Approval Pending",
        downloadURL: "https://firebasestorage.googleapis.com/v0/b/cmt-af.appspot.com/o/SE%20...",
        
    }).expect(200).then((res) => {
        researchId = res.body._id;
    });

    await request(app).post('/research/insertResearch').send({

        authorName: "Kasu",
        authorEmail: "kasu@gmail.com",
        authorContact: "0714567771",
        researchTitle: "DS",
        researchDescription: "Distributed System",
        approvalStatus: "Approved",
        downloadURL: "https://firebasestorage.googleapis.com/v0/b/cmt-af.appspot.com/o/SE%20...",
        
    }).expect(200).then((res) => {
        researchId = res.body._id;
    });

    await request(app).post('/research/insertResearch').send({

        authorName: "Tharu",
        authorEmail: "tharu@gmail.com",
        authorContact: "0726784563",
        researchTitle: "SA",
        researchDescription: "Software Architecture",
        approvalStatus: "Approved",
        downloadURL: "https://firebasestorage.googleapis.com/v0/b/cmt-af.appspot.com/o/SE%20...",
        eventStatus: "Reserved",
        
    }).expect(200).then((res) => {
        researchId = res.body._id;
    });

});

afterAll(async () => {
    mongoose.disconnect();
});