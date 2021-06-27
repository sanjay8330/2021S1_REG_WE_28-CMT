import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class UnApprovedWorkshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            unapprovedWorkshops: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllUnApprovedWorkshops/')
            .then(response => {
                this.setState({ unapprovedWorkshops: response.data });
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="container1">
                    <center><h1>Workshop waiting for Reviewer Approval</h1></center><hr />

                    <table class="table border shadow" aria-readonly="true">
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.unapprovedWorkshops.length > 0 && this.state.unapprovedWorkshops.map((item, index) =>
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
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br />

            </div>
        )
    }
}
