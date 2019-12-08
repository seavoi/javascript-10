import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

/* Components */
import Header from './components/Header';
import Course from './components/Course';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={Course} />
        <Route exact path="/courses" render={() => <Redirect to="/" />} />
        <Route path="/courses/create" component={CreateCourse} />

        <Route path="/courses/:id/update" component={UpdateCourse} />
        <Route path="/courses/:id" component={CourseDetail} />

        <Route path="/signin" component={UserSignIn} />
        <Route path="/signup" component={UserSignUp} />
      </Switch>
    </div>
  </BrowserRouter>
);