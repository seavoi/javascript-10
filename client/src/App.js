import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

/* Context */
import withContext from './Context';

/* Components */
import Header from './components/Header';
import Course from './components/Course';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';

/* Context Components */
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);

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

        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
      </Switch>
    </div>
  </BrowserRouter>
);