import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class ViewResearchPaper extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddResearch = this.navigateToAddResearch.bind(this);
        this.navigateToNAResearch = this.navigateToNAResearch.bind(this);
        this.state = {
            approvedResearch: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllApprovedResearch/')
            .then(response => {
                this.setState({ approvedResearch: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddResearch(e) {
        window.location = '/addResearch';
    }

    navigateToNAResearch(e){
        window.location = '/getNAResearch';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary" type="button" onClick={this.navigateToNAResearch}>View Approval Pending Research Papers</button>
                        <button class="btn btn-primary" type="button" onClick={this.navigateToAddResearch}>Add New Research Paper</button>
                    </div><br />

                    <center><h1>RESEARCH PAPERS Approved BY Reviewer - ADMIN VIEW</h1></center><hr /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">authorName</th>
                                <th scope="col">authorEmail</th>
                                <th scope="col">authorContact</th>
                                <th scope="col">researchTitle</th>
                                <th scope="col">researchDescription</th>
                                <th scope="col">research Date</th>
                                <th scope="col">research Time</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Admin Approval Status</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.approvedResearch.length > 0 && this.state.approvedResearch.map((item, index) =>
                                <tr>
                                    <td>{item.authorName}</td>
                                    <td>{item.authorEmail}</td>
                                    <td>{item.authorContact}</td>
                                    <td>{item.researchTitle}</td>
                                    <td>{item.researchDescription}</td>
                                    <td>{item.researchDate}</td>
                                    <td>{item.researchTime}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.adminApprovalStatus}</td>
                                    <td><a class="btn btn-success" href="path/to/settings" aria-label="Approve">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" href="path/to/settings" aria-label="Decline">
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
