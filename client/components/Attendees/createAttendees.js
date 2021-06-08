import React, { Component } from 'react';
import Axios from 'axios';

const initialState = {
    "name": '',
    "email": '',
    "phone": '',
    "events": [],
    "payDate": '',
    "payAmount": '',
    "accountNo": '',
    "workshops": []
}

class AddAttendees extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        //For Demo purpose
        //Need to check on this
        const id = "60bf1ae16c22fe2780516c66";
        Axios.get(`http://localhost:3001/conferenceEvent/readConferenceEvents/${id}`)
            .then(response => {
                this.setState({ workshops: response.data.response });
                console.log('RESPONSE', this.state.workshops);
            }).catch(error => {
                alert('Cannot Fetch Data');
            })
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
            <div className="container">
                <h3>Add Attendee Details</h3>
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
        )
    }
}

export default AddAttendees;