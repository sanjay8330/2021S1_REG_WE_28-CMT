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

    componentDidMount(){
        Axios.get('http://localhost:3001/user/getAllUsers')
        .then(response => {
            this.setState({ users: response.data.data });
        }).catch(error => {
            alert('Error Fetching Data!');
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        this.state.users.length > 0 && this.state.users.map((item, key) => {
            if(item.userEmail === this.state.email && item.userPassword === this.state.password){
                if(item.userCategory === 'Reviewer'){
                    alert('Reviewer login Successful!!');
                }else if(item.userCategory === 'Editor'){
                    alert('Editor login Successful!!');
                }else if(item.userCategory === 'Administrator'){
                    alert('Administrator login Successful!!');
                }else{
                    alert('General User login success');
                }
            }else{
                alert('Invalid Login');
            }
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