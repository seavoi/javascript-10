import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Components */
import Header from './Header';
import Course from './Course';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Header />
          
          <UpdateCourse />
          
          <Switch>

          </Switch>

        </div>
      </Router>
    );
  }

}