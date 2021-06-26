import React, { Component } from 'react';
import Header from '../../components/Header_Footer/header';

export default class SignUpHome extends Component {
    constructor(props) {
        super(props);
        this.navigateToUserWorkshopAdd = this.navigateToUserWorkshopAdd.bind(this);
    }

    navigateToUserWorkshopAdd(e){
        window.location = '/addUserWorkshop';
    }

    navigateToUserResearchAdd(e){
        window.location = '/addUserResearch';
    }

    render() {
        return (
            <div>
                <Header /><br />
                <h2>Sign up Home</h2>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="button" onClick={this.navigateToUserWorkshopAdd}>Sign Up to add Workshop</button>
                    <button class="btn btn-primary" type="button" onClick={this.navigateToUserResearchAdd}>Sign Up to add Research Paper</button>
                </div>
            </div>
        )
    }
}