import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './subcomponents/Form';

export default class UserSignIn extends Component {

	state = {
		emailAddress: '',
		password: '',
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
    const { emailAddress, password } = this.state;
    context.actions.signIn(emailAddress, password)
    .then( user => {
      if (user === null) {
        this.setState(() => {
          return { errors: [ 'Sign-in was unsuccessful' ] };
        });
      } else {
         this.props.history.push('/');
         console.log(`SUCCESS! ${emailAddress} is now signed in!`);
      }
    })
    .catch( err => {
      console.log(err);
      this.props.history.push('/error');
    })

    //const user = { firstName, lastName, emailAddress, password };

		/* event.preventDefault();

		const { emailAddress, password } = this.state;

		fetch('http://localhost:5000/api/courses', {
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

    const {
      emailAddress,
      password,
      errors,
    } = this.state;

    return (
		  
    	<div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <div>

             <Form 
              cancel={this.actionCancel}
              errors={errors}
              submit={this.actionSubmit}
              submitButtonText="Sign In"
              elements={() => (
                <React.Fragment>
                  <input 
                    id="emailAddress" 
                    name="emailAddress" 
                    type="text"
                    value={emailAddress}
                    onChange={this.actionChange} 
                    placeholder="User Name" />
                  <input 
                    id="password" 
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.actionChange} 
                    placeholder="Password" />                
                </React.Fragment>
              )} />
          </div>
          <p>&nbsp;</p>
          <p>Don't have a user account? <Link to="/signup">Click here</Link> to sign up!</p>
        </div>
      </div>

  	);
  }

}