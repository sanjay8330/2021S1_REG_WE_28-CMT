import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class UnApprovedResearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unapprovedResearch: []
        }
    }

    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllUnApprovedResearch/')
            .then(response => {
                this.setState({ unapprovedResearch: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <center><h3>RESEARCH PAPERS waiting for Reviewer Approval - ADMIN VIEW</h3></center><hr />

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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.unapprovedResearch.length > 0 && this.state.unapprovedResearch.map((item, index) =>
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
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}