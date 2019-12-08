import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UserSignIn extends Component {

	state = {
		emailAddress: '',
		password: ''
	};

	/* Cancel Event */
  actionCancel = (event) => {
  	event.preventDefault();
    this.props.history.push(`/`);
  }

  /* Change Event */
	actionChange = (event) => {
		const value = event.target.value;
    const name = event.target.name;
    this.setState(() => {
      return {
        [name]: value
      };
    });
	}

	/* Form Submit Event */
	actionSubmit = (event) => {
		event.preventDefault();

		const { emailAddress, password } = this.state;

		/* fetch('http://localhost:5000/api/courses', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title, description, materialsNeeded, estimatedTime })
		})
		.then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log('You in danger girl.', error);
    }); */

	}

 	render() {
    return (
		  
    	<div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>
            <form onSubmit={this.actionSubmit}>
              <div>
              	<input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" onChange={this.actionChange} value={this.state.emailAddress} />
              </div>
              <div>
              	<input id="password" name="password" type="password" placeholder="Password" onChange={this.actionChange} value={this.state.password} />
              </div>
              <div className="grid-100 pad-bottom">
              	<button className="button" type="submit">Sign In</button>
              	<button className="button button-secondary" onClick={(event) => this.actionCancel(event)}>Cancel</button>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
        </div>
      </div>

  	);
  }

}