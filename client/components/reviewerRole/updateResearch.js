import React, { Component } from 'react';
import Axios from 'axios';
import Header from '../Header_Footer/reviewerHeader';

const initialStates = {
    "research": [],
    "approvalStatus": 'Approved',
    "researchAmount": '',
}
class UpdateResearch extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    componentDidMount(e) {
        Axios.get(`http://localhost:3001/research/readById/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ research: response.data });
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let updResearch = {
            "approvalStatus": this.state.approvalStatus,
            "researchAmount": this.state.researchAmount
        }
        Axios.put(`http://localhost:3001/research/approveOrDecline/${this.props.match.params.id}`, updResearch)
            .then(response => {
                alert('Updated Successfully');
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {

        return (
            <div>
                <Header /><br /><br /><br /><br />

                {this.state.research.length > 0 && this.state.research.map((item, index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3">
                            <h4>Research paper Title        : {item.researchTitle}</h4>
                            <h5>Research Paper Author Email : {item.authorEmail}</h5>
                            <a href={item.downloadURL}>Download Research Paper document</a>
                        </div>
                    </div>
                ))}

                <div className="container" style={{ width: "740px" }}>
                    <br />
                    <div className="add5">
                        <center><h2 class="log" style={{ color: "white" }}>Update Research Paper Details</h2></center><br />
                        <form onSubmit={this.onSubmit} style={{ height: "100px;" }}>

                        <span style={{ color: "white" }}>Research Amount</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="researchAmount"
                                    name="researchAmount"
                                    value={this.state.researchAmount}
                                    onChange={this.onChange}
                                    required
                                /><br/>
                            
                            <span style={{ color: "white" }}>Approval Status</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="approvalStatus"
                                    name="approvalStatus"
                                    value={this.state.approvalStatus}
                                    required
                                    readOnly
                                /><br/>
                           
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div><br />
                </div>
            </div>
        )
    }
}

export default UpdateResearch;