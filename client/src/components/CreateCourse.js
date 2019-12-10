import React, { Component } from 'react';
import Form from './subcomponents/Form';

export default class CreateCourse extends Component {

	state = {
		title: '',
		description: '',
		estimatedTime: '',
		materialsNeeded: '',
    errors: [],
	};

	/* Cancel Event */
  actionCancel = () => {
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
	actionSubmit = () => {

    const { context } = this.props;
    const authUser = context.authenticatedUser;

    const { title, description, materialsNeeded, estimatedTime } = this.state;
    const userId = context.authenticatedUser.id;
    const courseInformation = { userId, title, description, materialsNeeded, estimatedTime };

    context.data.createCourse(courseInformation, authUser.emailAddress, authUser.passsword)

    .then( errors => {
      if (errors.length) {
        this.setState({ errors });
      } else {
        console.log(`${title} was successfully created!`);
        context.actions.createCourse( userId, title, description, materialsNeeded, estimatedTime )
        .then(() => {
          this.props.history.push('/');    
        });
      }
    }) 
    .catch( err => {
      console.log(err);
      this.props.history.push('/error');
    }); 
	}

 	render() {

    const { context } = this.props;
    const authUser = context.authenticatedUser;

 		const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors
    } = this.state;

    return (

    	<div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <Form 
            cancel={this.actionCancel}
            errors={errors}
            submit={this.actionSubmit}
            submitButtonText="Create Course"
            elements={() => (
            <React.Fragment>
              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input 
                      id="title" 
                      name="title" 
                      type="text"
                      value={title} 
                      onChange={this.actionChange} 
                      placeholder="Title" />
                  </div>
                  <p>By {authUser.firstName} {authUser.lastName}</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea 
                      id="description" 
                      name="description" 
                      placeholder="Course description..." 
                      value={description} 
                      onChange={this.actionChange} />
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input 
                          id="estimatedTime" 
                          name="estimatedTime" 
                          type="text"
                          value={estimatedTime} 
                          onChange={this.actionChange} 
                          placeholder="Hours" />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea 
                          id="materialsNeeded" 
                          name="materialsNeeded" 
                          placeholder="List materials..." 
                          value={materialsNeeded} 
                          onChange={this.actionChange} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          )} />
        </div>
      </div>
		  
  	);
  }

}