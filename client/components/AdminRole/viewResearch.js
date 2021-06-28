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

                    <button class="btn btn-primary" type="button" onClick={this.navigateToNAResearch}>View Approval Pending Research Paper</button>

                        <button class="btn btn-primary" type="button" onClick={this.navigateToAddResearch}>Add New Research Paper</button>
                    </div><br />

                    <center><h1>Research Papers Approved BY Reviewer - ADMIN VIEW</h1></center><hr /><br />

                    <center><p><b>**Note: Hi Admin, you can only view the approved research papers which are reserved/unreserved at conference***</b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">authorName</th>
                                <th scope="col">authorEmail</th>
                                <th scope="col">authorContact</th>
                                <th scope="col">researchTitle</th>
                                <th scope="col">researchDescription</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Event Status</th>
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
                                    <td>{item.approvalStatus}</td>
                                    <td>{item.eventStatus}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />

            </div>
        )
    }
}
