import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './subcomponents/Form';

export default class UserSignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    errors: [],
  };

	/* Cancel Event */
  actionCancel = () => {
  	this.props.history.push('/');
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
  actionSubmit = () => {

    const { context } = this.props;

    const { firstName, lastName, emailAddress, password } = this.state;

    const user = { firstName, lastName, emailAddress, password };

    context.data.createUser(user)
    .then( errors => {
      if (errors.length) {
        this.setState({ errors });
      } else {
        console.log(`${firstName} is successfully signed up and authenticated!`);
      }
    }) 
    .catch( err => {
      console.log(err);
      this.props.history.push('/error');
    }); 

  }

 	render() {

    const {
      firstName,
      lastName,
      emailAddress,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
		  
    	<div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <div>
            <Form 
              cancel={this.actionCancel}
              errors={errors}
              submit={this.actionSubmit}
              submitButtonText="Sign Up"
              elements={() => (
              <React.Fragment>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text"
                  value={firstName} 
                  onChange={this.actionChange} 
                  placeholder="First Name" />
                <input 
                  id="lastName" 
                  name="lastName" 
                  type="text"
                  value={lastName} 
                  onChange={this.actionChange} 
                  placeholder="Last Name" />
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="email"
                  value={emailAddress}
                  onChange={this.actionChange} 
                  placeholder="Email Address" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.actionChange} 
                  placeholder="Password" />
                <input 
                  id="confirmPassword" 
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={this.actionChange} 
                  placeholder="Cofirm Password" />
              </React.Fragment>
            )} />
          </div>
          <p>&nbsp;</p>
          <p>Already have a user account? <Link to="/signin">Click here</Link> to sign in!</p>
        </div>
      </div>

  	);
  }

}