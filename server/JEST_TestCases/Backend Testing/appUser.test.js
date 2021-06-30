const app = require('../../index');
const request = require('supertest');
const mongoose = require("mongoose");

const User = require('../../models/AppUser');

jest.setTimeout(100000);

let userId = '';

beforeAll(async () => {
    //delete already exist users on CMT Test database
    await User.deleteMany(); 
    
});

//Test the User API - SANJAY
test('should insert a new user', async () => {
    await request(app).post('/user/addUser').send({
        userName: "Kushira",
        userCategory: "Editor",
        userEmail: "kushira@gmail.com",
        userPassword: "kushira123",
        userContact: "0770836699",
    }).expect(200).then((res) => {
        workshopId = res.body._id;
    });
});

afterAll(async () => {
    mongoose.disconnect();
});