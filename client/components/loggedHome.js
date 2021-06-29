import React, { Component } from 'react'
import Header from '../components/Header_Footer/loggedHeader';
import Axios from 'axios';
import '../css/App.css';

export default class LoggedHome extends Component {
  constructor(props) {
    super(props);
    this.navigateToViewResearch = this.navigateToViewResearch.bind(this);
    this.navigateToViewWorkshop = this.navigateToViewWorkshop.bind(this);
    this.state = {
      researches: []
    }
  }

  navigateToViewResearch(e) {
    window.location = `/viewUserResearch/${this.props.match.params.id}`;
  }

  navigateToViewWorkshop(e) {
    window.location = `/viewUserWorkshop/${this.props.match.params.id}`;
  }

  render() {
    return (
      <div>
        <Header /><br /><br /><br /><br /><br />
        <div>
          <center><h1>HOME PAGE</h1></center><br />
        </div>

        <div class="sidenav">
          <a href="#" onClick={this.navigateToViewResearch}>Previous Research papers</a>
          <a href="#" onClick={this.navigateToViewWorkshop}>Previous Workshops</a>
          <a href="#">Make Payments for Research paper</a>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
