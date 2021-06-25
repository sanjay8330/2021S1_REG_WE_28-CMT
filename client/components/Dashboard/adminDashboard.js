import React, { Component } from 'react'
import Header from '../Header_Footer/adminHeader';
import '../../css/App.css';

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.navigateToUserAdd = this.navigateToUserAdd.bind(this);
    this.navigateToWorkshop = this.navigateToWorkshop.bind(this);
    this.navigateToResearch = this.navigateToResearch.bind(this);
  }

  navigateToUserAdd(e) {
    window.location = '/addUser';
  }

  navigateToWorkshop(e){
    window.location = '/addWorkshop';
  }

  navigateToResearch(e){
    window.location = '/addResearch';
  }
  render() {
    return (
      <div>
        <Header /><br />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary" type="button" onClick={this.navigateToUserAdd}>User Management</button>
          <button class="btn btn-primary" type="button" onClick={this.navigateToWorkshop}>Manage Workshops</button>
          <button class="btn btn-primary" type="button" onClick={this.navigateToResearch}>Manage Research Papers</button>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      </div>
    )
  }
}
