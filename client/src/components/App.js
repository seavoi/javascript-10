import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* Components */
import Header from './Header';
import Course from './Course';
import CourseDetail from './CourseDetail';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Header />
          
          <CourseDetail />
          
          <Switch>

          </Switch>

        </div>
      </Router>
    );
  }

}