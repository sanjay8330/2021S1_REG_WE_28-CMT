const router = require('express').Router();
const AttendeeModel = require('../models/Attendee');

//The add method - Attendee
router.route("/insertAttendee").post(async (req, res) => {
    const attendeeName = req.body.attendeeName;
    const attendeeEmail = req.body.attendeeEmail;
    const attendeeContact = req.body.attendeeContact;
    const paymentDate = req.body.paymentDate;
    const paymentAmount = req.body.paymentAmount; 
    const paymentAccountNo = req.body.paymentAccountNo;
    //Events to be added
    //const events = req.body.events;

    const attendee = new AttendeeModel({
        attendeeName: attendeeName,
        attendeeEmail: attendeeEmail,
        attendeeContact: attendeeContact,
        paymentDate: paymentDate,
        paymentAmount: paymentAmount,
        paymentAccountNo: paymentAccountNo,
    });

    try{
        await attendee.save();
        console.log("Data inserted successfully!!!");
        res.send("Inserted Data!!");
    }catch(err){
        console.log(err);
    }
});

//Read all attendees
router.route("/readAllAttendees").get(async (req, res) => {
    AttendeeModel.find({}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read Attendee by ID
router.route("/readById/:id").get(async (req, res) => {
    const id = req.params.id;

    AttendeeModel.find({_id:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read Attendee for a conference
router.route("/readByconferenceId/:id").get(async (req, res) => {
    const id = req.params.id;

    AttendeeModel.find({conferenceID:id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//Read Attendee by ID
router.route("/deleteById/:id").get(async (req, res) => {
    const id = req.params.id;

    AttendeeModel.findByIdAndRemove({_id: id}, (error,result) => {
        if(error){
            res.send(error);
        }

        res.send(result)
    })
});

//----------------OPTIONAL-----------------------------
//Update the attendee details
router.route("/update").put(async (req, res) => {
    const attendeeName = req.body.attendeeName;
    const attendeeEmail = req.body.attendeeEmail;
    const attendeeContact = req.body.attendeeContact;
    const paymentDate = req.body.paymentDate;
    const paymentAmount = req.body.paymentAmount;
    const paymentAccountNo = req.body.paymentAccountNo;
    const id = req.body.id;

    try{
        await AttendeeModel.findById(id, (err, updatedAttendeeObject) => {
            updatedAttendeeObject.attendeeName = attendeeName;
            updatedAttendeeObject.attendeeEmail = attendeeEmail;
            updatedAttendeeObject.attendeeContact = attendeeContact;
            updatedAttendeeObject.paymentDate = paymentDate;
            updatedAttendeeObject.paymentAmount = paymentAmount;
            updatedAttendeeObject.paymentAccountNo = paymentAccountNo;
            updatedAttendeeObject.save();
            console.log("Updated Successfully!!!");
            res.send("Updated Successfully");
        });
    }catch(err){
        console.log(err);
    }
});

module.exports = router; 