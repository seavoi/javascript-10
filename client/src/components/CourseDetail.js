import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";

/* Subomponents */
import ActionBar from './subcomponents/ActionBar';

export default class CourseDetail extends Component {

	constructor() {
    super();
    this.state = {
      courseDetails: [],
      courseInstructor: []
    };
  }

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
    		<ActionBar />
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