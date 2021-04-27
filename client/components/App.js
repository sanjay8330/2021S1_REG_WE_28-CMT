import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {
    const [userID, setuserID] = useState(0);
    const [userType, setuserType] = useState("");
    const [userName, setuserName] = useState("");
    const [userContact, setuserContact] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [userPassword, setuserPassword] = useState("");

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
        });
        window.location.reload(false);
    }
    
    return (
        <div>
            <div>
                <h1>The Conference Management Tool - Add Operation</h1>

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
        </div>
    );
}

export default App;
