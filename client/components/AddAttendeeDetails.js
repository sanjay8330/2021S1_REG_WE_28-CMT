import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AddAttendeeDetails() {
    /*The attributes to add workshop conductor details*/
    const [attendeeName, setattendeeName] = useState("");
    const [attendeeEmail, setattendeeEmail] = useState("");
    const [attendeeContact, setattendeeContact] = useState(0);
    const [paymentDate, setpaymentDate] = useState(0);
    const [paymentAmount, setpaymentAmount] = useState(0);
    const [paymentAccountNo, setpaymentAccountNo] = useState(0);

    //Add Method - Workshop User
    const addAttendee = () => {
        Axios.post("http://localhost:3001/attendee/insertAttendee", {
            attendeeName: attendeeName,
            attendeeEmail: attendeeEmail,
            attendeeContact: attendeeContact,
            paymentDate: paymentDate,
            paymentAmount: paymentAmount,
            paymentAccountNo: paymentAccountNo,
        });
        window.location.reload(false);
    }

    return (
        <div>
            <div class="Form1">
                <center><h2>Attendee Information - CMT</h2></center>

                <hr />

                <center><h3>Attendee Personal Information</h3></center>
                <label>Attendee Name</label><br />
                <input type="text" onChange={(event) => {
                    setattendeeName(event.target.value)
                }} /><br />

                <label>Attendee Email</label><br />
                <input type="text" onChange={(event) => {
                    setattendeeEmail(event.target.value)
                }} /><br />

                <label>Attendee Phone</label><br />
                <input type="text" onChange={(event) => {
                    setattendeeContact(event.target.value)
                }} /><br />

                <center><h3>Conference Details</h3></center>

                <center><h3>Payment Details</h3></center>
                <label>Payment Date</label><br />
                <input type="text" onChange={(event) => {
                    setpaymentDate(event.target.value)
                }} /><br />

                <label>Payment Amount</label><br />
                <input type="text" onChange={(event) => {
                    setpaymentAmount(event.target.value)
                }} /><br />

                <label>Payment Bank Account Number</label><br />
                <input type="text" onChange={(event) => {
                    setpaymentAccountNo(event.target.value)
                }} /><br />

                <center><button class="registerbtn" onClick={addAttendee}>Register for Conference</button></center>
            </div>

        </div>
    );
}

export default AddAttendeeDetails;