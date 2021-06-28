import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewWorkshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddWorkshop = this.navigateToAddWorkshop.bind(this);
        this.navigateToNAWorkshop = this.navigateToNAWorkshop.bind(this);
        this.state = {
            approvedWorkshops: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllApprovedWorkshops/')
            .then(response => {
                this.setState({ approvedWorkshops: response.data });
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    //Navigating to the add workshop page
    navigateToAddWorkshop(e) {
        window.location = '/addWorkshop';
    }

    navigateToNAWorkshop(e) {
        window.location = '/getNAWorkshop';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="container1">

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary" type="button" onClick={this.navigateToNAWorkshop}>Workshops waiting for Reviewer Approval</button>
                        <button class="btn btn-primary" type="button" onClick={this.navigateToAddWorkshop}>Add New Workshops</button>
                    </div><br />

                    <center><h1>Workshop Details approved by Reviewer - ADMIN VIEW</h1></center><hr /><br />

                    <center><p><b>**Note: Hi Admin, you can only view the approved workshops which are reserved/unreserved at conference***</b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Speakers</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Event Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.approvedWorkshops.length > 0 && this.state.approvedWorkshops.map((item, index) =>
                                <tr>
                                    <td>{item.workshopConductorName}</td>
                                    <td>{item.workshopConductorEmail}</td>
                                    <td>{item.workshopConductorPhone}</td>
                                    <td>{item.workshopTitle}</td>
                                    <td>{item.workshopDescription}</td>
                                    <td>{item.workshopSpeakers}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.eventStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br />

            </div>
        )
    }
}
