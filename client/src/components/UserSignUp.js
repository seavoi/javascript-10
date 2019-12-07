import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UserSignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
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
    this.setState({
        [name] : value
    })
  }

  /* Form Submit Event */
  actionSubmit = (event) => {
    event.preventDefault();

    const { firstName, lastName, emailAddress, password } = this.state;
    const user = { firstName, lastName, emailAddress, password };

    console.log(firstName);

    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, emailAddress, password })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log('You in danger girl.', error);
    });

  }

 	render() {
    return (
		  
    	<div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <div>
            <form onSubmit={this.actionSubmit}>
              <div>
              	<input id="firstName" name="firstName" type="text" placeholder="First Name" onChange={this.actionChange} value={this.state.firstName} />
              </div>
              <div>
              	<input id="lastName" name="lastName" type="text" placeholder="Last Name" onChange={this.actionChange} value={this.state.lastName} />
              </div>
              <div>
              	<input id="emailAddress" name="emailAddress" type="text" placeholder="Email Address" onChange={this.actionChange} value={this.state.emailAddress} />
          		</div>
              <div>
              	<input id="password" name="password" type="password" placeholder="Password" onChange={this.actionChange} value={this.state.password} />
            	</div>
              <div>
              	<input id="confirmPassword" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={this.actionChange} value={this.state.confirmPassword} />
               </div>
              <div className="grid-100 pad-bottom">
              	<button className="button" type="submit">Sign Up</button>
              	<button className="button button-secondary" onClick={(event) => this.actionCancel(event)}>Cancel</button>
              </div>
            </form>
          </div>
          <p>&nbsp;</p>
          <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
        </div>
      </div>

  	);
  }

}