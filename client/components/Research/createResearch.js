import React, { Component } from 'react';
import Axios from 'axios';
import firebase from '../../Firebase/firebase';

const initialStates = {
    "authorName": '',
    "authorEmail": '',
    "authorPhone": '',
    "title": '',
    "description": '',
    "approvalStatus": 'Pending Approval',
    "fileURL": ''
}
class AddResearch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.state = initialStates;
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }

    async onFileChange (e){
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file).then(() => {
            alert('File Uploaded Successfully!!', file.name);
        })
        const downloadURL = await fileRef.getDownloadURL();
        console.log('Download URL', downloadURL);
        this.setState({ fileURL: downloadURL});
    }

    onSubmit(e){
        e.preventDefault();
        let research = {
            "authorName": this.state.authorName,
            "authorEmail": this.state.authorEmail,
            "authorContact": this.state.authorPhone,
            "researchTitle": this.state.title,
            "researchDescription": this.state.description,
            "approvalStatus": this.state.approvalStatus, 
            "downloadURL": this.state.fileURL
        }
        Axios.post('http://localhost:3001/research/insertResearch', research)
        .then(response => {
            alert('Data Added Successfully');
        }).catch(error => {
            alert('Error :', error.message);
        })
    }

    render() {
        return (
            <div className="container">
                <h3>Add Research Paper Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="authorName" className="form-label">Research Paper Author Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="authorName"
                            name="authorName"
                            value={this.state.authorName}
                            onChange={this.onChange}
                            required="true"
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
                            required="true"
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
                            required="true"
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
                            required="true"
                        />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="researchdescrip" class="form-label">Research Paper Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                            required="true">
                        </textarea>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="upload file" class="form-label">Upload Research Paper</label>
                        <input
                            type="file"
                            className="form-control"
                            id="file"
                            name="file"
                            onChange={this.onFileChange}
                            required="true"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddResearch;