import React, { Component } from 'react';
import {Link} from 'react-router-dom';

/* Subomponents */
import CourseCard from './subcomponents/CourseCard';

export default class Courses extends Component {

  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  // Gather all of the courses for index list
  componentDidMount() {
    fetch(`http://localhost:5000/api/courses`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ courses: responseData.course });
    })
    .catch(error => {
      console.log('Uh-oh! We ran into an issue while retrieving a list of courses.', error);
    });
  }

  render() {

    const courseList = this.state.courses.map(({ title, id }) => (
      <CourseCard title={title} id={id} key={id} />
    ));

    return (

      <div className="bounds">
        {courseList}
        <div className="grid-33">
          <Link className="course--module course--add--module" to="/courses/create">
            <h3 className="course--add--title">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>New Course
            </h3>
          </Link>
        </div>
      </div>

    );
  }
}