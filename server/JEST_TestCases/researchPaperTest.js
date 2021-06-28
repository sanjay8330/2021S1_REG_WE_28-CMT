const app = require('../index');
const request = require('supertest');
const Research = require('../models/research');

jest.setTimeout(30000);

let id = '';

beforeAll(async () => {
    //delete already exist research papers
    await Research.deleteMany(); 
});

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
        id = res.body._id;
    });
})