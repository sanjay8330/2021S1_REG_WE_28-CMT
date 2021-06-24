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
                        <a className="navbar-brand" href="/dashboard" style={{ color: "red" }}>CMT-2021</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/dashboard">DASHBOARD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/addUser">User</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="topnav-right">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/dashboard">Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;