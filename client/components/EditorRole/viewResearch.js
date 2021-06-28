import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class ViewResearchEditor extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            approvedResearch: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllApprovedUnreserved/')
            .then(response => {
                this.setState({ approvedResearch: response.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <center><h1>Research Papers Approved By Reviewer - Editor View</h1></center><hr /><br />
                    <center><p><b>**Note: Hi Editor, you can only view the approved research paper but which are not yet added to the conference here***</b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">authorName</th>
                                <th scope="col">authorEmail</th>
                                <th scope="col">authorContact</th>
                                <th scope="col">researchTitle</th>
                                <th scope="col">researchDescription</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Action</th>
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
                                    <td>
                                        <button type="button" class="btn btn-primary">Add to conference</button>
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
