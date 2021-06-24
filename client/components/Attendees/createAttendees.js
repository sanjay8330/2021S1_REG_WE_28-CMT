import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';
import Axios from 'axios';

const initialState = {
    "name": '',
    "email": '',
    "phone": '',
    "events": [],
    "payDate": '',
    "payAmount": '',
    "accountNo": '',
}

class AddAttendees extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        let attendee = {
            "attendeeName": this.state.name,
            "attendeeEmail": this.state.email,
            "attendeeContact": this.state.phone,
            "paymentDate": this.state.payDate,
            "paymentAmount": this.state.payAmount,
            "paymentAccountNo": this.state.accountNo
        }
        Axios.post('http://localhost:3001/attendee/insertAttendee', attendee)
            .then(response => {
                alert('Data added Successfully!');
            }).catch(error => {
                alert('Error ', error.message);
            })
    }

    render() { 
        
        return (
            <div>
                <Header />
                <div className="container" style={{ width: "740px" }}>

                    <br /><br />
                    <div className="w-100 mx-auto shadow p-5">
                        <div className="card card-body" style={{ width: "600px", backgroundColor: "#dfe5e8" }}>
                            <center><h2 class="mt-1 bg-primary text-center text-white p-2 rounded shadow">Add Attendee Details</h2></center><br />
                            <form onSubmit={this.onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="attendeeName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        pattern="[0-9]{10}"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentData" className="form-label">Payment Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="payDate"
                                        name="payDate"
                                        value={this.state.payDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="paymentAmount" className="form-label">Payment Amount</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="payAmount"
                                        name="payAmount"
                                        value={this.state.payAmount}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="accountNo" className="form-label">Bank Account Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="accountNo"
                                        name="accountNo"
                                        value={this.state.accountNo}
                                        onChange={this.onChange}
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

export default AddAttendees;