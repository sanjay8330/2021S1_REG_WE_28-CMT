import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/App.css';
import App2 from './App2';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
    /*The attributes to add a new user */
    const [userID, setuserID] = useState(0);
    const [userType, setuserType] = useState("");
    const [userName, setuserName] = useState("");
    const [userContact, setuserContact] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");
    
    /*The attributes to add a workshop */
    const [workshopTitle, setworkshopTitle] = useState("");
    const [workshopDescription, setworkshopDescription] = useState("");
    const [workshopSpeakers, setworkshopSpeakers] = useState("");
    const [workshopDate, setworkshopDate] = useState("");
    const [workshopTime, setworkshopTime] = useState("");
    const approvalStatus = 'PendingApproval';

    //Add Method - USER
    const addToList = () => {
        console.log(userID + userName);
        Axios.post("http://localhost:3001/insert", {
          userID: userID,
          userType: userType,
          userName: userName,
          userContact: userContact, 
          userEmail: userEmail,
          userPassword: userPassword,
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
                <h3>User Information - CMT</h3>

                <label>User ID</label>
                <input type="text" onChange={(event) => {
                setuserID(event.target.value)
                }} />

                <label>User Type</label>
                <input type="text" onChange={(event) => {
                setuserType(event.target.value)
                }} />

                <label>User Full Name</label>
                <input type="text" onChange={(event) => {
                setuserName(event.target.value)
                }} />

                <label>User Contact Number</label>
                <input type="text" onChange={(event) => {
                setuserContact(event.target.value)
                }} />

                <label>User Email Address</label>
                <input type="text" onChange={(event) => {
                setuserEmail(event.target.value)
                }} />

                <label>User Password</label>
                <input type="text" onChange={(event) => {
                setuserPassword(event.target.value)
                }} />

                <button onClick={addToList}>Add User Details</button>
            </div>
            <div class="AddForm2">
                <h3>Workshop Information - CMT</h3>

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
            </div> 

            <div>
            <Router>
                <Link to="/workshop/add">Add</Link>
                <Switch>
                    <Route exact path='/workshop/add'>
                        <App2 />
                    </Route>
                </Switch>
            </Router>
            </div>   

        </div>
    );
}

export default App;
