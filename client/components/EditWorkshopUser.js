import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css/App.css';

function EditWorkshopUser() { 
    /*The attributes to add a workshop */
    const [userID, setuserID] = useState(0);
    const [workshopTitle, setworkshopTitle] = useState("");
    const [workshopDescription, setworkshopDescription] = useState("");
    const [workshopSpeakers, setworkshopSpeakers] = useState("");
    const [workshopDate, setworkshopDate] = useState("");
    const [workshopTime, setworkshopTime] = useState("");
    const approvalStatus = 'PendingApproval';

     /*The attributes to update a workshop */
     const [newworkshopDescription, setnewworkshopDescription] = useState("");
     const [newworkshopSpeakers, setnewworkshopSpeakers] = useState("");
     const [newworkshopDate, setnewworkshopDate] = useState("");
     const [newworkshopTime, setnewworkshopTime] = useState("");
     const newapprovalStatus = 'PendingApproval';

    /*Attributes to get all the wokshop details**/
    const [workshoplist, setworkshoplist] = useState([]);

    /*Attributes to get the wokshop details by ID**/
    const [newworkshoplist, setnewworkshoplist] = useState([]);


    //Get all workshop details method
    useEffect(() => {
        Axios.get("http://localhost:3001/workshop/readAllWorkshops").then((response) => {
            setworkshoplist(response.data);
        });
    }, []);

    //Get the workshop details by ID
    const getList = (id) => {
        Axios.get(`http://localhost:3001/workshop/readById/${id}`).then((response) => {
          setnewworkshoplist(response.data);
        });
      }


    //Add Method - USER
    const addToWorkshopList = () => {
        Axios.post("http://localhost:3001/workshop/insertWorkshop", {
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

    //Update workshop details
    const updateWorkshop = (id) => {
        Axios.put("http://localhost:3001/workshop/update", {
          id: id,
          newworkshopDescription: newworkshopDescription,
          newworkshopSpeakers: newworkshopSpeakers,
          newworkshopTime: newworkshopTime,
          newworkshopDate: newworkshopDate,
          newapprovalStatus: newapprovalStatus
        });
        window.location.reload(false);
      }
    
    return (
        <div>
            <div class="AddForm">
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

            <div class="viewTable">
                <h1>Workshop List</h1>

                <table>
                    <tr>
                        <th>User ID</th>
                        <th>Workshop Title</th>
                        <th>Workshop Description</th>
                        <th>Workshop Speakers</th>
                        <th>Workshop Date</th>
                        <th>Workshop Time</th>
                        <th>Workshop Approval Status</th>
                        <th>Edit</th>
                    </tr>
                    {workshoplist.map((val, key) => {
                        return <tr key={key}>
                        <td> {val.userID} </td> 
                        <td> {val.workshopTitle} </td>
                        <td> {val.workshopDescription} </td>
                        <td> {val.workshopSpeakers} </td>
                        <td> {val.workshopDate} </td>
                        <td> {val.workshopTime} </td>
                        <td> {val.approvalStatus} </td>
                        <td> <button onClick={() => getList(val._id)}>Edit</button> </td>
                    </tr>
                    })}
                </table>
            </div>

            <div class="updateForm">
                <h1>Edit Details Window</h1>
                {newworkshoplist.map((val, key) => {
                return <div key={key}>
                    <label>Workshop Title - {val.workshopTitle} </label><br /><br />

                    <label>Workshop Description - {val.workshopDescription} </label>
                    <input type="text" onChange={(event) => {
                    setnewworkshopDescription(event.target.value)
                    }}/>

                    <label>Workshop Speakers - {val.workshopSpeakers}</label>
                    <input type="text" onChange={(event) => {
                    setnewworkshopSpeakers(event.target.value)
                    }}/>

                    <label>Workshop Date - {val.workshopDate} </label>
                    <input type="text" onChange={(event) => {
                    setnewworkshopDate(event.target.value)
                    }}/>

                    <label>Workshop Time - {val.workshopTime}</label>
                    <input type="text" onChange={(event) => {
                    setnewworkshopTime(event.target.value)
                    }}/>

                    <td> <button onClick={() => updateWorkshop(val._id)}>UPDATE</button> </td>
                    <td> <button>DELETE</button> </td>
    
                </div>    
                })}
            </div>

        </div>
    );
}

export default EditWorkshopUser;
