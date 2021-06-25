import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

export default class researchPaper extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            research: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/research/readAllResearch/')
            .then(response => {
                this.setState({ research: response.data });
            })
    }

    render() {
        return (
            <div>
                <Header /><br />
                <div className="container1"><br />
                    <center><h1>View Research Papers</h1></center><hr /><br /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">authorName</th>
                                <th scope="col">authorEmail</th>
                                <th scope="col">authorContact</th>
                                <th scope="col">researchTitle</th>
                                <th scope="col">researchDescription</th>
                                <th scope="col">Status</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.research.length > 0 && this.state.research.map((item, index) =>
                                <tr>
                                    <td>{item.authorName}</td>
                                    <td>{item.authorEmail}</td>
                                    <td>{item.authorContact}</td>
                                    <td>{item.researchTitle}</td>
                                    <td>{item.researchDescription}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td><a class="btn btn-success" href="UpdateResearchReviewer" aria-label="Edit">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" href="path/to/settings" aria-label="Delete">
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
