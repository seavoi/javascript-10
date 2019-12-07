import React, { Component } from 'react';

export default class UpdateCourse extends Component {

	constructor() {
    super();
    this.state = {
      courseDetails: []
    };
  }

  componentDidMount() {

  	const {id} = this.props.match.params;

    fetch(`http://localhost:5000/api/courses/${id}`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ courseDetails: responseData.course });
    })
    .catch(error => {
      console.log('Uh-oh! We ran into an issue while retrieving a the details of a requested course for updating.', error);
    });
  }

 	render() {

 		const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
    } = this.state.courseDetails;

    return (

    	<div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <form>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                	<input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." value="{title}" />
              	</div>
                <p>By Joe Smith</p>
              </div>
              <div className="course--description">
                <div>
                	<textarea id="description" name="description" className="" placeholder="Course description...">{description}</textarea>
								</div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                    	<input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value="{estimatedTime}" />
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                    	<textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials...">{materialsNeeded}</textarea>
										</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-100 pad-bottom">
            	<button className="button" type="submit">Update Course</button>
            	<button className="button button-secondary" onclick="event.preventDefault(); location.href='course-detail.html';">Cancel</button>
            </div>
          </form>
        </div>
      </div>
		  
  	);
  }

}