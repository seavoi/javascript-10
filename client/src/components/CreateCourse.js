import React, { Component } from 'react';

export default class CreateCourse extends Component {

	state = {

		course: {
			title: '',
			description: '',
			estimatedTime: '',
			materialsNeeded: ''
		}

	};

	/* Cancel */
  btnCancel = (event) => {
  	event.preventDefault();
    this.props.history.push(`/`);
  }

	/* Value Change */
	valueChange = (event) => {
		const course = { ...this.state.course };
    course[event.target.name] = event.target.value;
    this.setState({ course });
	}

	/* Form Submit */
	formSubmit = (event) => {
		event.preventDefault();

		

	}

 	render() {
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
          <form onSubmit={this.formSubmit}>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                	<input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." onChange={this.valueChange} />
                </div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div>
                	<textarea id="description" name="description" className="" placeholder="Course description..." onChange={this.valueChange} />
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                    	<input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" onChange={this.valueChange} />
                  	</div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                    	<textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." onChange={this.valueChange} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
            	<button className="button" type="submit">Create Course</button>
            	<button className="button button-secondary" onClick={(event) => this.btnCancel(event)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
		  
  	);
  }

}