import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class ViewConference extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.navigateToAddConference = this.navigateToAddConference.bind(this);
        this.state = {
            conferences: []
        }
    }
    //retrieving all research
    componentDidMount() {
        axios.get('http://localhost:3001/conference/readAllConferences')
            .then(response => {
                this.setState({ conferences: response.data.data });
            }).catch(error => {
                alert('Error', error.message);
            })
    }

    navigateToAddConference(e) {
        window.location = '/addConference';
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br />
                <div className="container1"><br />

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-primary" type="button" onClick={this.navigateToAddConference}>Add New Conference</button>
                    </div><br />

                    <center><h3>Conference Details</h3></center><hr />

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Conference Title</th>
                                <th scope="col">Conference Briefings</th>
                                <th scope="col">Conference Date</th>
                                <th scope="col">Conference Time</th>
                                <th scope="col">Add Events</th>
                                <th scope="col">Delete Conference</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.conferences.length > 0 && this.state.conferences.map((item, index) =>
                                <tr>
                                    <td>{item.conferenceTitle}</td>
                                    <td>{item.conferenceBriefing}</td>
                                    <td>{item.conferenceDate}</td>
                                    <td>{item.conferenceTime}</td>
                                    <td><a class="btn btn-success" aria-label="Approve">
                                        <i class="fa fa-edit" aria-hidden="true"></i>
                                    </a></td>
                                    <td>
                                        <a class="btn btn-danger" aria-label="Decline">
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
