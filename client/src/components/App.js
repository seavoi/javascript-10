import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Components */
import Header from './Header';
import CourseList from './CourseList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/courses')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ courses: responseData.course });
    })
    .catch(error => {
      console.log('Uh-oh! We ran into an issue while retrieving a list of courses.', error);
    });
  }

  render() {
    console.log(this.state.courses);
    return (
      <Router>
        <div>

          <Header />
          <CourseList data={this.state.courses} />

          <Switch>

          </Switch>

        </div>
      </Router>
    );
  }

}