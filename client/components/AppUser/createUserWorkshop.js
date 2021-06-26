import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import Axios from 'axios';
import firebase from '../../Firebase/firebase';

const initialState = {
    "name": '',
    "category": 'General User',
    "email": '',
    "password": '',
    "contact": '',
    "confirmPassword": '',
    "conductorName": '',
    "conductorEmail": '',
    "conductorPhone": '',
    "workshopTitle": '',
    "workshopDescription": '',
    "workshopSpeakers": '',
    "fileURL": '',
    "adminApprovalStatus": ''
}

export default class UserPlusWorkshop extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    //Upload the workshop flyer
    async onFileChange(e) {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file).then(() => {
            alert('File Uploaded Successfully!!', file.name);
        })
        const downloadURL = await fileRef.getDownloadURL();
        console.log('Download URL', downloadURL);
        this.setState({ fileURL: downloadURL });

        //In case the above code fails  -due to time to upload and set the download URL
        /*
        const downloadURL = await fileRef.getDownloadURL().then(() => {
            console.log('Download URL', downloadURL);
            this.setState({ fileURL: downloadURL });
        })
        */
    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.password === this.state.confirmPassword) {
            alert('Password Mismatch!!');
        }
        let user = {
            "userName": this.state.name,
            "userCategory": this.state.category,
            "userEmail": this.state.email,
            "userPassword": this.state.password,
            "userContact": this.state.contact
        }
        Axios.post('http://localhost:3001/user/addUser', user)
            .then(response => {
                let workshop = {
                    "workshopConductorName": this.state.conductorName,
                    "workshopConductorEmail": this.state.conductorEmail,
                    "workshopConductorPhone": this.state.conductorPhone,
                    "workshopTitle": this.state.workshopTitle,
                    "workshopDescription": this.state.workshopDescription,
                    "workshopSpeakers": this.state.workshopSpeakers,
                    "approvalStatus": 'Approval Pending',
                    "downloadURL": this.state.fileURL,
                    "adminApprovalStatus": 'Approval Pending'
                }
                Axios.post('http://localhost:3001/workshop/insertWorkshop', workshop)
                    .then(response => {
                        alert('User & Workshop Details Added Successfully');
                    }).catch(error => {
                        alert('Error ', error.message);
                    })

            }).catch(error => {
                alert(error.message);
            })
    }


    render() {
        return (
            <div>
                <Header /><br />
                <div className="container">
                    <center><h2 class="reg1" style={{ color: "black" }}>User Details</h2></center><br />
                    <form onSubmit={this.onSubmit}>

                        <span style={{ color: "black" }}>Username</span>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            placeholder="Enter username"
                        /><br />

                        <span style={{ color: "black" }}>Email</span>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            placeholder="Enter email address"
                        /><br />

                        <span style={{ color: "black" }}>Password</span>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            placeholder="Enter password"
                        /><br />

                        <span style={{ color: "black" }}>Confirm Password</span>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                            placeholder="Enter username"
                        /><br />

                        <span style={{ color: "black" }}>Contact Number</span>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.onChange}
                            placeholder="Enter contact number"
                        />

                        <hr />
                        <center><h2 class="reg1" style={{ color: "black" }}>Workshop Details</h2></center><br />

                        <div className="mb-3">
                            <label htmlFor="conductorName" className="form-label">Workshop Conductor Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="conductorName"
                                name="conductorName"
                                value={this.state.conductorName}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="conductorEmail" className="form-label">Workshop Conductor Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="conductorEmail"
                                name="conductorEmail"
                                value={this.state.conductorEmail}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="conductorPhone" className="form-label">Workshop Conductor Phone</label>
                            <input
                                type="tel"
                                pattern="[0-9]{10}"
                                className="form-control"
                                id="conductorPhone"
                                name="conductorPhone"
                                value={this.state.conductorPhone}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="workshopTitle" className="form-label">Workshop Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="workshopTitle"
                                name="workshopTitle"
                                value={this.state.workshopTitle}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="workshopdescrip" className="form-label">Workshop Description</label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                name="workshopDescription"
                                value={this.state.workshopDescription}
                                onChange={this.onChange}>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="workshopspeakers" className="form-label">Workshop Speakers</label>
                            <textarea
                                className="form-control"
                                id="workshopSpeakers"
                                rows="3"
                                name="workshopSpeakers"
                                value={this.state.workshopSpeakers}
                                onChange={this.onChange}>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="upload file" className="form-label">Upload Workshop Flyer</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                name="file"
                                onChange={this.onFileChange}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}