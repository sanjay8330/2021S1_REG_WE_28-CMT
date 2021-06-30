const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const Workshop = require('../../models/workshop');

jest.setTimeout(100000);

let workshopId = '';

beforeAll(async () => {
    //delete already exist Workshops on CMT Test database
    await Workshop.deleteMany();

});

//Test the Workshop API - SANJAY
test('should insert a new workshop', async () => {
    await request(app).post('/workshop/insertWorkshop').send({

        workshopConductorName: "Kushira",
        workshopConductorEmail: "kushira@gmail.com",
        workshopConductorPhone: "0770874411",
        workshopTitle: "Introduction to REST API",
        workshopDescription: "Provide a brief outline on implementing REST API",
        workshopSpeakers: "Kushira Thusithanjana",
        approvalStatus: "Approval Pending",
        downloadURL: "https://firebasestorage.googleapis.com/v0/b/cmt-af.appspot.com/o/SE%20...",

    }).expect(200).then((res) => {
        workshopId = res.body._id;
    });
});

afterAll(async () => {
    mongoose.disconnect();
});
