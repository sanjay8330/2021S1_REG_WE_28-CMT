import React, { Component } from 'react';
import Axios from 'axios';
import Select from 'react-select';

const initialState = {
    "name": '',
    "category": '',
    "email": '',
    "password": '',
    "contact": '',
    "confirmPassword": '',
    "options": []
}

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectedOption = this.onSelectedOption.bind(this);
        this.state = initialState;
    }

    componentDidMount(){
        let data = [];
        let userType1 = {
            value: 'Reviewer',
            label: 'Reviewer'
        }
        let userType2 = {
            value: 'Editor',
            label: 'Editor' 
        }
        let userType3 = {
            value: 'Administrator',
            label: 'Administrator' 
        }
        data.push(userType1);
        data.push(userType2);
        data.push(userType3);
        this.setState({ options: data });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSelectedOption(e){
        this.setState({ category : e.value });
    }
    onSubmit(e) {
        e.preventDefault();
        if(!this.state.password === this.state.confirmPassword){
            alert('Password Mismatch!!');
        }
        let user = {
            "userName": this.state.name,
            "userCategory": this.state.category,
            "userEmail": this.state.email,
            "userPassword": this.state.password,
            "userContact": this.state.contact
        }
        Axios.post('http://localhost:3001/user/addUser', user)
            .then(response => {
                alert('Data added Successfully!');
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div className="container">
                <h3>Add Application User Details</h3>
                <form onSubmit={this.onSubmit}>
                    <Select 
                        options={this.state.options}
                        onChange={this.onSelectedOption}
                    />
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
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
                        <label htmlFor="email" className="form-label">Email Address</label>
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
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                        <input
                            type="tel"
                            pattern="[0-9]{10}"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={this.state.contact}
                            onChange={this.onChange}
                        />
                    </div>
            
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUser;