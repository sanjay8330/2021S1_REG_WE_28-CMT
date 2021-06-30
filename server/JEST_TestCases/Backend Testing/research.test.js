const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const Research = require('../../models/research');

jest.setTimeout(100000);

let researchId = '';

beforeAll(async () => {
    //delete already exist research papers
    await Research.deleteMany();
});

//Test the Research Paper API
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
});

afterAll(async () => {
    mongoose.disconnect();
});