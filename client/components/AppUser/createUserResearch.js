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
    "authorName": '',
    "authorEmail": '',
    "authorPhone": '',
    "title": '',
    "description": '',
    "approvalStatus": 'Pending Approval',
    "fileURL": '',
    "adminApprovalStatus": 'Pending Approval'
}

export default class UserPlusResearch extends Component {
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

    async onFileChange(e) {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file).then(() => {
            alert('File Uploaded Successfully!!', file.name);
            document.getElementById("submitBtn").disabled = false;
        })
        const downloadURL = await fileRef.getDownloadURL();
        console.log('Download URL', downloadURL);
        this.setState({ fileURL: downloadURL });
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
                let research = {
                    "authorName": this.state.authorName,
                    "authorEmail": this.state.authorEmail,
                    "authorContact": this.state.authorPhone,
                    "researchTitle": this.state.title,
                    "researchDescription": this.state.description,
                    "approvalStatus": this.state.approvalStatus,
                    "downloadURL": this.state.fileURL,
                    "adminApprovalStatus": this.state.adminApprovalStatus
                }
                Axios.post('http://localhost:3001/research/insertResearch', research)
                    .then(response => {
                        alert('User & Research Paper Added Successfully');
                    }).catch(error => {
                        alert('Error :', error.message);
                    })
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
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
                        <center><h2 class="reg1" style={{ color: "black" }}>Research Paper Details</h2></center><br />

                        <div className="mb-3">
                            <label htmlFor="authorName" className="form-label">Research Paper Author Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="authorName"
                                name="authorName"
                                value={this.state.authorName}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="authorEmail" className="form-label">Research Paper Author Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="authorEmail"
                                name="authorEmail"
                                value={this.state.authorEmail}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="authorPhone" className="form-label">Research Paper Author Phone</label>
                            <input
                                type="tel"
                                pattern="[0-9]{10}"
                                className="form-control"
                                id="authorPhone"
                                name="authorPhone"
                                value={this.state.authorPhone}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="researchTitle" className="form-label">Research Paper Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="researchdescrip" className="form-label">Research Paper Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                name="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                required>
                            </textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="upload file" className="form-label">Upload Research Paper</label>
                            <input
                                type="file"
                                className="form-control"
                                id="file"
                                name="file"
                                onChange={this.onFileChange}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" id="submitBtn" disabled>Submit</button>
                    </form>
                </div><br />
            </div>
        )
    }
}