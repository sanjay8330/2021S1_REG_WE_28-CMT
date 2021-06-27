import React, { Component } from 'react'
import Header from '../components/Header_Footer/loggedHeader';
import '../css/App.css';

export default class LoggedHome extends Component {
  constructor(props){
    super(props);
    this.navigateToAddResearch = this.navigateToAddResearch.bind(this);
    this.navigateToAddWorkshop = this.navigateToAddWorkshop.bind(this);
  }

  navigateToAddResearch(e){
    window.location = '/addResearch';
  }

  navigateToAddWorkshop(e){
    window.location = '/addWorkshop';
  }

  render() {
    return (
      <div>
        <Header /><br /><br /><br />
        <div class="jumbotron feature">
          <h1>HOME PAGE</h1>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" onClick={this.navigateToAddWorkshop}>Add Workshops</button>
            <button class="btn btn-primary" type="button" onClick={this.navigateToAddResearch}>Add Research papers</button>
            <button class="btn btn-primary" type="button">Make Payments for Research paper</button>
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
