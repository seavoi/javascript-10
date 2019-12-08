import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

 	render() {

    return (
		  <div className="header">
        <div className="bounds">
          <h1 className="header--logo"><Link to='/'>Courses</Link></h1>
          <nav>
          	<span>Welcome Joe Smith!</span>
          	<Link className="signout" to="/">Sign Out</Link>
          </nav>
        </div>
      </div>
  	);
  }

}