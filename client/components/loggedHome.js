import React, { Component } from 'react'
import Header from '../components/Header_Footer/loggedHeader';
import '../css/App.css';

export default class LoggedHome extends Component {
  render() {
    return (
      <div>
        <Header /><br /><br /><br />
        <div class="jumbotron feature">
          <h1>HOME PAGE</h1>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
