import React, { Component } from 'react'
import Header from '../Header_Footer/reviewerHeader';
import axios from 'axios';

export default class summary extends Component {

    //initializing the states
    constructor(props) {
        super(props);
        this.state = {
            workshops: [],
            research: []
        }
    }
    //retrieving all workshops
    componentDidMount() {
        axios.get('http://localhost:3001/workshop/readAllWorkshops/')
            .then(response => {
                this.setState({ workshops: response.data });
            })

        axios.get('http://localhost:3001/research/readAllResearch/')
            .then(response => {
                this.setState({ research: response.data });
            })
    }

    render() {
        return (
            <div>
                <Header /><br /><br /><br /><br /><br />
                <center>
                    <h1>Summary</h1><hr/><br/>
                    <div class="containerR" style={{ backgroundColor: "#cee8f0" }}>
                        <div class="table-responsive">
                            <h2 class="sub-header">Summary of Workshop Details</h2><br />
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-md-1">NAME</th>
                                        <th class="col-md-3">TITLE</th>
                                        <th class="col-md-3">AMOUNT</th>
                                        <th class="col-md-4">REVIEWER STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.workshops.length > 0 && this.state.workshops.map((item, index) =>
                                        <tr>
                                            <td>{item.workshopConductorName}</td>
                                            <td>{item.workshopTitle}</td>
                                            <td><b><mark style={{ color: "green" }}>Rs. {item.workshopAmount}.00</mark></b></td>
                                            <td><b><mark style={{ color: "red" }}>{item.approvalStatus}</mark></b></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div><hr />
                        <h2 class="sub-header">Summary of Research paper Details</h2><br />
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th class="col-md-1">NAME</th>
                                        <th class="col-md-3">TITLE</th>
                                        <th class="col-md-2">AMOUNT</th>
                                        <th class="col-md-4">REVIEWER STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.research.length > 0 && this.state.research.map((item, index) =>
                                        <tr>
                                            <td>{item.authorName}</td>
                                            <td>{item.researchTitle}</td>
                                            <td><b><mark style={{ color: "green" }}>Rs. {item.researchAmount}.00</mark></b></td>
                                            <td><b><mark style={{ color: "red" }}>{item.approvalStatus}</mark></b></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div><br /><br />
                </center>


            </div>
        )
    }
}
