import React, { Component } from 'react';
import Axios from 'axios';

const initialState = {
    "email": '',
    "password": '',
    "users": []
}



class UserLogin extends Component {
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

        Axios.get(`http://localhost:3001/user/validateUser/${this.state.email}`)
        .then(response => {
            this.setState({ users: response.data.data });
            console.log(this.state.users.length);

            //Handle the invalid login
            if(this.state.users.length == 0){
                alert('User Not found!!!');
            }

            this.state.users.length > 0 && this.state.users.map((item, key) => {
                if(item.userPassword === this.state.password){
                    if(item.userCategory === 'General User'){
                        alert('General User logged In');
                    }
                    if(item.userCategory === 'Reviewer'){
                        window.location = '/reviewerDashboard';
                    }
                    if(item.userCategory === 'Editor'){
                        window.location = '/editorDashboard';
                    }
                    if(item.userCategory === 'Administrator'){
                        window.location = '/adminDashboard';
                    }

                }else{
                    alert('Password or Username is Invalid!!');
                }
            })
        }).catch(error => {
            alert('Error ', error.message);
        })  
    }

    render() {
        return (
            <div className="container">
                <h3>Login - CMT Application</h3>
                <form onSubmit={this.onSubmit}>
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

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}

export default UserLogin;