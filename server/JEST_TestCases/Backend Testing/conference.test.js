const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const ConferenceK = require('../../models/Conference');

jest.setTimeout(100000);

let conId = '';

beforeAll(async () => {
    //delete already exist conferences on CMT Test database
    await ConferenceK.deleteMany();

});

//Test the Conference API - KAVINDI
test('should insert a new conference', async () => {

    await request(app).post('/conference/insertConference').send({

        conferenceTitle: "Sample1",
        conferenceBriefing: "Sample2",
        conferenceDate: "2021-06-09",
        conferenceTime: "10:20",

    }).expect(200).then((res) => {
        conId = res.body._id;
    });

    await request(app).post('/conference/insertConference').send({

        conferenceTitle: "Title1",
        conferenceBriefing: "Briefing",
        conferenceDate: "2021-07-09",
        conferenceTime: "11:20",

    }).expect(200).then((res) => {
        conId = res.body._id;
    });

});

afterAll(async () => {
    mongoose.disconnect();
});
