import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewWorkshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddWorkshop = this.navigateToAddWorkshop.bind(this);
        this.state = {
            workshops: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllWorkshops/')
            .then(response => {
                this.setState({ workshops: response.data });
            })
    }

    //Navigating to the add workshop page
    navigateToAddWorkshop(e){
        window.location = '/addWorkshop';
    }

    render() {
        return (
            <div>
                <Header /><br />
                <div className="container1"><br />
                    <center><h1>View Workshops - Admin View</h1></center><hr />

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary" type="button" onClick={this.navigateToAddWorkshop}>Add New Workshops</button>
                    </div><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Speakers</th>
                                <th scope="col">Workshop Date</th>
                                <th scope="col">Workshop Time</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Admin Approval Status</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.workshops.length > 0 && this.state.workshops.map((item, index) =>
                                <tr>
                                    <td>{item.workshopConductorName}</td>
                                    <td>{item.workshopConductorEmail}</td>
                                    <td>{item.workshopConductorPhone}</td>
                                    <td>{item.workshopTitle}</td>
                                    <td>{item.workshopDescription}</td>
                                    <td>{item.workshopSpeakers}</td>
                                    <td>{item.workshopDate}</td>
                                    <td>{item.workshopTime}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.adminApprovalStatus}</td>
                                    <td><a class="btn btn-success" href="path/to/settings" aria-label="Approve">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" href="path/to/settings" aria-label="Reject">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
