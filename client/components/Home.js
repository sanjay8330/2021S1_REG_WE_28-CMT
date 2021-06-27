import React, { Component } from 'react'
import Header from '../components/Header_Footer/header';
import '../css/App.css';

export default class home extends Component {
  render() {
    return (
        <div class="home">
          <Header /><br /><br /><br /><br /><br /><br /><br />
          <div class="text">
            <span class="glyphicon glyphicon-equalizer">SLIIT PROJECT CONFERENCE</span>
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
  }
}
