import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/App.css';

function App2() { 
    /*The attributes to add a workshop */
    const [userID, setuserID] = useState(0);
    const [workshopTitle, setworkshopTitle] = useState("");
    const [workshopDescription, setworkshopDescription] = useState("");
    const [workshopSpeakers, setworkshopSpeakers] = useState("");
    const [workshopDate, setworkshopDate] = useState("");
    const [workshopTime, setworkshopTime] = useState("");
    const approvalStatus = 'PendingApproval';

    //Add Method - USER
    const addToWorkshopList = () => {
        Axios.post("http://localhost:3001/insertWorkshop", {
          userID: userID, 
          workshopTitle: workshopTitle,
          workshopDescription: workshopDescription,
          workshopSpeakers: workshopSpeakers,
          workshopDate: workshopDate,
          workshopTime: workshopTime,
          approvalStatus: approvalStatus, 
        });
        window.location.reload(false);
        console.log("Data inserted successfully!!!");
    }
    
    return (
        <div>
            <div className="AddForm">
                <h3>Workshop Information - CMT</h3>

                <label>USER ID </label>
                <input type="text" onChange={(event) => {
                setuserID(event.target.value)
                }} />

                <label>Workshop Title</label>
                <input type="text" onChange={(event) => {
                setworkshopTitle(event.target.value)
                }} />

                <label>Workshop Description</label>
                <input type="text" onChange={(event) => {
                setworkshopDescription(event.target.value)
                }} />

                <label>Workshop Speakers</label>
                <input type="text" onChange={(event) => {
                setworkshopSpeakers(event.target.value)
                }} />

                <label>Workshop Date</label>
                <input type="text" onChange={(event) => {
                setworkshopDate(event.target.value)
                }} />

                <label>Workshop Time</label>
                <input type="text" onChange={(event) => {
                setworkshopTime(event.target.value)
                }} />

                <button onClick={addToWorkshopList}>Add User Details</button>
            </div>


        </div>
    );
}

export default App2;
