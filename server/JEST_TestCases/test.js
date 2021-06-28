const app = require('../index');
const request = require('supertest');

const Workshop = require('../models/workshop');
const Research = require('../models/research');
const AppUser = require('../models/AppUser');

jest.setTimeout(30000);

let researchId = '';
let workshopId = '';
let userId = '';

beforeAll(async () => {
    //delete already exist research papers
    await Research.deleteMany();
    await Workshop.deleteMany(); 
    await AppUser.deleteMany();
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

//Test the Workshop API
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

//Test the user API
test('should insert a new user', async () => {
    await request(app).post('/user/addUser').send({

        userName: "Tharaka",
        userCategory: "General User",
        userEmail: "tharaka@gmail.com",
        userPassword: "tharaka123",
        userContact: "0774411287"
        
    }).expect(200).then((res) => {
        userId = res.body._id;
    });
})