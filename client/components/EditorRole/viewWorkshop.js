import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header_Footer/editorHeader';
import '../../css/App.css';

export default class ViewWorkshopEditor extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            approvedWorkshops: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllApprovedUnreserved/')
            .then(response => {
                this.setState({ approvedWorkshops: response.data });
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <div className="container1">

                    <center><h1>Workshop Details approved by Reviewer - Editor View</h1></center><hr /><br />

                    <center><p><b>**Note: Hi Editor, you can only view the approved workshops but which are not yet added to the conference here***</b></p></center>

                    <table class="table border shadow">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Reviewer Approval Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.approvedWorkshops.length > 0 && this.state.approvedWorkshops.map((item, index) =>
                                <tr>
                                    <td>{item.workshopConductorEmail}</td>
                                    <td>{item.workshopTitle}</td>
                                    <td>{item.workshopDescription}</td>
                                    <td>{item.approvalStatus}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary">Add to conference</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div><br /><br /><br />

            </div>
        )
    }
}