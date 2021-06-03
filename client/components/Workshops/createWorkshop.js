import React, { Component } from 'react';
import Axios from 'axios';

const initialStates = {
    "conductorName": '',
    "conductorEmail": '',
    "conductorPhone": '',
    "workshopTitle": '',
    "workshopDescription": '',
    "workshopSpeakers": ''
}
class AddWorkshop extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        let workshop = {
            "workshopConductorName": this.state.conductorName,
            "workshopConductorEmail": this.state.conductorEmail,
            "workshopConductorPhone": this.state.conductorPhone,
            "workshopTitle": this.state.workshopTitle,
            "workshopDescription": this.state.workshopDescription,
            "workshopSpeakers": this.state.workshopSpeakers,
            "approvalStatus": 'Approval Pending'
        }
        Axios.post('http://localhost:3001/workshop/insertWorkshop', workshop)
        .then(response => {
            alert('Workshop Details Added Successfully');
        }).catch(error => {
            alert('Error ',error.message);
        })

    }

    render() {
        return (
            <div className="container">
                <h3>Add Workshop Details</h3>
                <form onSubmit={this.onSubmit}>
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
                    <div class="mb-3">
                        <label htmlFor="workshopdescrip" class="form-label">Workshop Description</label>
                        <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3"
                            name="workshopDescription"
                            value={this.state.workshopDescription}
                            onChange={this.onChange}>
                        </textarea>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="workshopspeakers" class="form-label">Workshop Speakers</label>
                        <textarea 
                            className="form-control" 
                            id="workshopSpeakers" 
                            rows="3"
                            name="workshopSpeakers"
                            value={this.state.workshopSpeakers}
                            onChange={this.onChange}>
                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddWorkshop;