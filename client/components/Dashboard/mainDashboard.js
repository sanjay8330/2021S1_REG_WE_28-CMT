import React, { Component } from 'react'
import Header from '../Header_Footer/mainDashboardHeader';
import '../../css/App.css';

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <Header /><br/>
        <div class="sidenav"><br/>
            <a href="/dashboard"><i class="fa fa-fw fa-home"></i>Dashboard</a><br/>
            <a href="/adminDashboard"><i class="fa fa-fw fa-user"></i>Admin</a><br/>
            <a href="/reviewerDashboard"><i class="fa fa-fw fa-user"></i>Reviewer</a><br/>
            <a href="/editorDashboard"><i class="fa fa-fw fa-user"></i>Editor</a>
          </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}
