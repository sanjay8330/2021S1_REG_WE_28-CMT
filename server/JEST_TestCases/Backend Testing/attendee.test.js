const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const Attendee = require('../../models/Attendee');

jest.setTimeout(30000);

let attendeeId = '';

beforeAll(async () => {
    //delete already exist attendees on CMT Test database
    await Attendee.deleteMany();

});

//Test the Attendee API - Keshawa (IT19150758)
test('should insert a new attendee', async () => {

    await request(app).post('/attendee/insertAttendee').send({

        attendeeName: "Keshawa",
        attendeeEmail: "keshawa@gmail.com",
        attendeeContact: "0774563332",
        paymentDate: "2021.06.09",
        paymentAmount: 1000,
        paymentAccountNo: 111,

    }).expect(200).then((res) => {
        attendeeId = res.body._id;
    });

    await request(app).post('/attendee/insertAttendee').send({

        attendeeName: "Sanjay",
        attendeeEmail: "sanjay@gmail.com",
        attendeeContact: "0775674430",
        paymentDate: "2021.08.09",
        paymentAmount: 1500,
        paymentAccountNo: 222,

    }).expect(200).then((res) => {
        attendeeId = res.body._id;
    });

});

afterAll(async () => {
    mongoose.disconnect();
});
