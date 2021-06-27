import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';

const initialStates = {
    "workshop": [],
    "approvalStatus": 'Approved',
    "workshopAmount": '',
}
class UpdateWorkshop extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = initialStates;
    }

    componentDidMount(e) {
        Axios.get(`http://localhost:3001/workshop/readById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ workshop: response.data });
                console.log('RESPONSE ', this.state.workshop.length);
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    onSubmit(e) {
        e.preventDefault();
        let updWorkshop = {
            "approvalStatus": this.state.approvalStatus,
            "workshopAmount": this.state.workshopAmount
        }
        Axios.put(`http://localhost:3001/workshop/approveOrDecline/${this.props.match.params.id}`, updWorkshop)
        .then(response => {
            alert('Updated Successfully');
        }).catch(error => {
            alert(error.message);
        })
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br />

                {this.state.workshop.length > 0 && this.state.workshop.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Workshop Title           : {item.workshopTitle}</h4>
                            <h5>Workshop Conductor Email : {item.workshopConductorEmail}</h5>
                            <a href={item.downloadURL}>Download Workshop Flyer</a>
                        </div>
                    </div>
                ))}

                <div className="container" style={{ width: "740px" }}>
                    <br />
                    <div className="w-100 mx-auto shadow p-5">
                        <div className="card card-body" style={{ width: "600px", backgroundColor: "#dfe5e8" }}>
                            <center><h2 class="mt-1 bg-primary text-center text-white p-2 rounded shadow">Update Research Paper Details</h2></center><br />
                            <form onSubmit={this.onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="workshopAmount" className="form-label">Workshop Amount at Conference</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="workshopAmount"
                                        name="workshopAmount"
                                        value={this.state.workshopAmount}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="approval" className="form-label">Approval Status</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="approvalStatus"
                                        name="approvalStatus"
                                        value={this.state.approvalStatus}
                                        required
                                        readOnly
                                    />
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default UpdateWorkshop;