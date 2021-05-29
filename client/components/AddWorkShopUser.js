import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/AddWorkShopUserCss';

function AddWorkShopUser() {
    /*The attributes to add workshop conductor details*/
    const [workshopConductorName, setworkshopConductorName] = useState("");
    const [workshopConductorEmail, setworkshopConductorEmail] = useState("");
    const [workshopConductorPhone, setworkshopConductorPhone] = useState("");
    
    /*The attributes to add a workshop details */
    const [workshopTitle, setworkshopTitle] = useState("");
    const [workshopDescription, setworkshopDescription] = useState("");
    const [workshopSpeakers, setworkshopSpeakers] = useState("");
    const approvalStatus = 'PendingApproval';

    //Add Method - Workshop User
    const addWorkshop = () => {
        Axios.post("http://localhost:3001/workshop/insertWorkshop", {
          workshopConductorName: workshopConductorName,
          workshopConductorEmail: workshopConductorEmail,
          workshopConductorPhone: workshopConductorPhone,
          workshopTitle: workshopTitle,
          workshopDescription: workshopDescription,
          workshopSpeakers: workshopSpeakers,
          approvalStatus: approvalStatus, 
        });
        window.location.reload(false);
    }
    
    return (
        <div>
            <div class="Form1">
                <center><h2>Workshop Information - CMT</h2></center>

                <hr />
                <label>Workshop Conductor Name</label><br />
                <input type="text" onChange={(event) => {
                setworkshopConductorName(event.target.value)
                }} /><br />

                <label>Workshop Conductor Email</label><br />
                <input type="text" onChange={(event) => {
                setworkshopConductorEmail(event.target.value)
                }} /><br />

                <label>Workshop Conductor Phone</label><br />
                <input type="text" onChange={(event) => {
                setworkshopConductorPhone(event.target.value)
                }} /><br />


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

                <center><button class="registerbtn" onClick={addWorkshop}>Submit For Approval</button></center>
            </div>  

        </div>
    );
}

export default AddWorkShopUser;
