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

        <center>
          <div class="d-grid gap-2 col-12 mx-auto">
            <div class="row1">
              <button class="Signbtn" onClick={this.navigateToViewResearch}>
                <img class="Signimg" />
                <center><br /><p class="Signtxt">View Previous Research Papers</p></center>
              </button>

              <button class="Signbtn" onClick={this.navigateToViewWorkshop}>
                <img class="Signimg" />
                <center><br /><p class="Signtxt">View Previous Workshops</p></center>
              </button>

              <button class="Signbtn">
                <img class="Signimg" />
                <center><br /><p class="Signtxt">Make Payments</p></center>
              </button>
            </div>

          </div></center>

        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
