import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Practice Test</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/addWorkshop">Workshops</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/addAttendee">Attendees</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/addResearch">Research Paper</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/addUser">User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;