import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';
import '../../css/App.css';

export default class workshop extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToWorkshopUpdate = this.navigateToWorkshopUpdate.bind(this);
        this.refreshPage = this.refreshPage.bind(this);
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

    //Navigate to the workshop Update page
    navigateToWorkshopUpdate(e, workshopId) {
        window.location = `/UpdateWorkshopReviewer/${workshopId}`;
    }

    //Refresh the entire page
    refreshPage(e) {
        window.location = '/DisplayWorkshopReviewer';
    }

    //delete() method
    delete(workshopId) {
        axios.get('http://localhost:3001/workshop/deleteById/' + workshopId)
            .then(response => {
                alert("Are you sure you want to delete this Workshop Details?");
                this.componentDidMount();
            });
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />
                    <center><h1>WORKSHOP DETAILS - REVIEWER VIEW</h1></center><hr /><br /><br />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Speakers</th>
                                <th scope="col">Amount in Rs.</th>
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
                                    <td>{item.workshopAmount}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td><a class="btn btn-success" onClick={e => this.navigateToWorkshopUpdate(e, item._id)} aria-label="Edit">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" onClick={() => this.delete(item._id)} href="#" aria-label="Delete"><i class="fa fa-trash" aria-hidden="true"></i>
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
