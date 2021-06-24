import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{ color: "red" }}>CMT-2021</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/addWorkshop">Workshops</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/addAttendee">Attendees</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/addResearch">Research Papers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="topnav-right">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/generalUserSignUp">SignUp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/logout">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;