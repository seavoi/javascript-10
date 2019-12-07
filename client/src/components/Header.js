import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.PureComponent {

 	render() {
    return (
		  <div className="header">
        <div className="bounds">
          <h1 className="header--logo">Courses</h1>
          <nav>
          	<span>Welcome Joe Smith!</span>
          	<Link className="signout" to="/">Sign Out</Link>
          </nav>
        </div>
      </div>
  	);
  }

}