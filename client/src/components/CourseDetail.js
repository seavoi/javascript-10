import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import {Link} from 'react-router-dom';

export default class CourseDetail extends Component {

	constructor() {
    super();
    this.state = {
      courseDetails: [],
      courseInstructor: []
    };
  }

  // Pull course information based on the ID within the URL
  componentDidMount() {

  	const {id} = this.props.match.params;

    fetch(`http://localhost:5000/api/courses/${id}`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ courseDetails: responseData.course });
      this.setState({ courseInstructor: responseData.course.User });
    })
    .catch(error => {
      console.log('Uh-oh! We ran into an issue while retrieving a the details of a requested course.', error);
    });
  }

  /* Delete Event */
  actionDelete = async () => {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    const id = this.state.courseDetails.id;

    // Send delete request to Data.js
    await context.data.removeCourse(id, authUser.emailAddress, authUser.password)
    .then(response => {
      if (response === 204) {
        console.log("Your request to delete a course was successful.");
        this.props.history.push('/');
      } else if (response === 500) {
        this.props.history.push('/error');
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  courseInstructorActions = () => {
    const { context } = this.props;
    const authUser = context.authenticatedUser;

    // Checks to see if there is currently any authenticatedUser data
    if (authUser !== null) {
      // Checks to see authenticatedUser data matches courseInstructor 
      if (this.state.courseInstructor.id === authUser.id) {
        return(
          <span>
            <Link className="button" to={`./${this.props.match.params.id}/update`}>Update Course</Link>
            <button className="button" onClick={this.actionDelete}>Delete Course</button>
          </span>
        )
      }
    }

  }

  render() {

  	const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
    } = this.state.courseDetails;

    const {
      firstName,
      lastName
    } = this.state.courseInstructor;

    return (
    	
    	<div>

    		<div className="actions--bar">
			    <div className="bounds">
			      <div className="grid-100">
                {this.courseInstructorActions()}
			    		<Link className="button button-secondary" to="/">Return to List</Link>
			    	</div>
			    </div>
			  </div>

	      <div className="bounds course--detail">
	        <div className="grid-66">
	          <div className="course--header">
	          	<h4 className="course--label">Course</h4>
	          	<h3 className="course--title">{title}</h3>
	          	<p>By {firstName} {lastName}</p>
	          </div>
	          <div className="course--description">
	          	<ReactMarkdown source={description} />
	          </div>
		      </div>
		      <div className="grid-25 grid-right">
		      	<div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{estimatedTime}</h3>
                </li>
                <li className="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <ReactMarkdown source={materialsNeeded} />
                  </ul>
                </li>
              </ul>
            </div>
          </div>
		    </div>
	    </div>

    );
  }

}