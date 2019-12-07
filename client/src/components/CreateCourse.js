import React, { Component } from 'react';

export default class CreateCourse extends Component {

	/* Submit Button */
	btnSubmit = (event) => {
		// Prevent Default Actions
		event.preventDefault();

		// Get Values
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;
		const estimatedTime = document.getElementById('estimatedTime').value;
		const materialsNeeded = document.getElementById('materialsNeeded').value;

		fetch('http://localhost:5000/api/courses', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, description, estimatedTime, materialsNeeded })
		})
		//.then(checkStatus)
		.then(res => res.json())
		.then(data => console.log(data))

	}

	/* Cancel Button */
  btnCancel = (event) => {
  	// Prevent Default Actions
  	event.preventDefault();
  	// Send to Index
    this.props.history.push(`/`);
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
          <form>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                	<input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." />
                </div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div>
                	<textarea id="description" name="description" className="" placeholder="Course description..."></textarea>
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                    	<input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" />
                  	</div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                    	<textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..."></textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
            	<button className="button" type="submit" onClick={(event) => this.btnSubmit(event)}>Create Course</button>
            	<button className="button button-secondary" onClick={(event) => this.btnCancel(event)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
		  
  	);
  }

}