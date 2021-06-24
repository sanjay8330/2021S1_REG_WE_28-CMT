import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

export default class workshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div>
                <Header /><br />
                <div className="container1"><br />
                    <center><h1>View Workshops</h1></center><hr /><br /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Speakers</th>
                                <th scope="col">Status</th>
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
                                    <td>{item.approvalStatus}</td>
                                    <td><a class="btn btn-success" href="path/to/settings" aria-label="Edit">
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
