import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//import '../css/App.css';
import '../css/AddWorkShopUserCss';
import EditWorkshopUser from './EditWorkshopUser';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function AddWorkShopUser() {
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
            <div className="Form1">
                <center><h2>User Information - CMT</h2></center>
                <hr />

                <label>User ID</label><br />
                <input type="text" onChange={(event) => {
                setuserID(event.target.value)
                }} /><br />

                <label>User Type</label><br />
                <input type="text" onChange={(event) => {
                setuserType(event.target.value)
                }} /><br />

                <label>User Full Name</label><br />
                <input type="text" onChange={(event) => {
                setuserName(event.target.value)
                }} /><br />

                <label>User Contact Number</label><br />
                <input type="text" onChange={(event) => {
                setuserContact(event.target.value)
                }} /><br />

                <label>User Email Address</label><br />
                <input type="text" onChange={(event) => {
                setuserEmail(event.target.value)
                }} /><br />

                <label>User Password</label><br />
                <input type="text" onChange={(event) => {
                setuserPassword(event.target.value)
                }} /><br />
            </div>
            <div class="Form2">
                <center><h2>Workshop Information - CMT</h2></center>

                <hr />

                <label>Workshop Title</label><br />
                <input type="text" onChange={(event) => {
                setworkshopTitle(event.target.value)
                }} /><br />

                <label>Workshop Description</label><br />
                <input type="text" onChange={(event) => {
                setworkshopDescription(event.target.value)
                }} /><br />

                <label>Workshop Speakers</label><br />
                <input type="text" onChange={(event) => {
                setworkshopSpeakers(event.target.value)
                }} /><br />

                <label>Workshop Date</label><br />
                <input type="text" onChange={(event) => {
                setworkshopDate(event.target.value)
                }} /><br />

                <label>Workshop Time</label><br />
                <input type="text" onChange={(event) => {
                setworkshopTime(event.target.value)
                }} /><br />

                <center><button class="registerbtn" onClick={addToList}>Add User Details</button></center>
            </div> 

            <div>
            <Router>
                <Link to="/workshop/add">Add</Link>
                <Switch>
                    <Route exact path='/'></Route>
                    <Route path='/workshop/add'>
                        <EditWorkshopUser />
                    </Route>
                </Switch>
            </Router>
            </div>   

        </div>
    );
}

export default AddWorkShopUser;
