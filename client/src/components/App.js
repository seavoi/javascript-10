import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

/* Components */
import Header from './Header';
import Course from './Course';
import CourseDetail from './CourseDetail';
import UserSignIn from './UserSignIn';
import UserSignUp from './UserSignUp';
import CreateCourse from './CreateCourse';
import UpdateCourse from './UpdateCourse';

import Context from './Context'

const HeaderWithContext = Context(Header);
const UserSignUpWithContext = Context(UserSignUp);

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderWithContext />
          <hr />
          <Switch>
            <Route exact path="/" component={Course} />
            <Route exact path="/courses" render={() => <Redirect to="/" />} />
            <Route path="/courses/create" component={CreateCourse} />

            <Route path="/courses/:id/update" component={UpdateCourse} />
            <Route path="/courses/:id" component={CourseDetail} />

            <Route path="/signin" component={UserSignIn} />
            <Route path="/signup" component={UserSignUpWithContext} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}