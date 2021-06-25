import React, { Component } from 'react'
import Header from '../components/Header_Footer/header';
import '../css/App.css';

export default class home extends Component {
  render() {
    return (
      <div>
        <Header />
	<div class="jumbotron feature">
		<div class="container">
			<h1><span class="glyphicon glyphicon-equalizer"></span> CMT - 2021 </h1>
			<h2>SLIIT Project Conferece</h2>
		</div>
	</div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
  }
}
