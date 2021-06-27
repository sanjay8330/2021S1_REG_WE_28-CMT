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
        <Header /><br /><br /><br /><br /><br />
        <div>
          <center><h1>HOME PAGE</h1></center><br />
        </div>

        <div class="sidenav">
          <a href="#" onClick={this.navigateToAddWorkshop}>Add Workshops</a>
          <a href="#" onClick={this.navigateToAddResearch}>Add Research papers</a>
          <a href="#">Make Payments for Research paper</a>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
