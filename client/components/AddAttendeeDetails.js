import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function AddAttendeeDetails(){
    /*The attributes to add workshop conductor details*/
    const [attendeeName, setattendeeName] = useState("");
    const [attendeeEmail, setattendeeEmail] = useState("");
    const [attendeePhone, setattendeePhone] = useState("");

    //Add Method - Workshop User
    const addAttendee = () => {
        Axios.post("http://localhost:3001/attendee/insertAttendee", {
          attendeeName: attendeeName,
          attendeeEmail: attendeeEmail,
          attendeePhone: attendeePhone,
        });
        window.location.reload(false);
    }

    return (
        <div>
            <div class="Form1">
                <center><h2>Attendee Information - CMT</h2></center>

                <hr />
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
                setattendeePhone(event.target.value)
                }} /><br />

                <center><button class="registerbtn" onClick={addAttendee}>Register for Conference</button></center>
            </div>  

        </div>
    );
}

export default AddAttendeeDetails;