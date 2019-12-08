import React, { Component } from 'react';

export default class CreateCourse extends Component {

	state = {
		title: '',
		description: '',
		estimatedTime: '',
		materialsNeeded: ''
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

		const { title, description, materialsNeeded, estimatedTime } = this.state;

		fetch('http://localhost:5000/api/courses', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title, description, materialsNeeded, estimatedTime })
		})
		.then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log('You in danger girl.', error);
    });

	}

 	render() {

 		const {
      title,
      description,
      estimatedTime,
      materialsNeeded
    } = this.state;

    return (

    	<div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <div>
            <h2 className="validation--errors--label">Validation errors</h2>
            <div className="validation-errors">
              <ul>
                <li>Please provide a value for "Title"</li>
                <li>Please provide a value for "Description"</li>
              </ul>
            </div>
          </div>
          <form onSubmit={this.actionSubmit}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                	<input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." value={title} onChange={this.actionChange} />
                </div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div>
                	<textarea id="description" name="description" className="" placeholder="Course description..." value={description} onChange={this.actionChange} />
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                    	<input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={estimatedTime} onChange={this.actionChange} />
                  	</div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                    	<textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."  value={materialsNeeded} onChange={this.actionChange} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
            	<button className="button" type="submit">Create Course</button>
            	<button className="button button-secondary" onClick={(event) => this.actionCancel(event)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
		  
  	);
  }

}