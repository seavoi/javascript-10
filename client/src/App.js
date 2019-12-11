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
import UserSignOut from './components/UserSignOut';

/* Context */
import withContext from './Context';

/* Private Routes */
import PrivateRoute from './PrivateRoute';

/* Context Components */
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const CourseDetailWithContext = withContext(CourseDetail);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => (
  <BrowserRouter>
    <div>
      <HeaderWithContext />
      <hr />
      <Switch>

        <Route exact path="/" component={Course} />
        <Route exact path="/courses" render={() => <Redirect to="/" />} />

        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />

        <Route path="/courses/:id" component={CourseDetailWithContext} />

        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />

        <Route path="/signout" component={UserSignOutWithContext} />

      </Switch>
    </div>
  </BrowserRouter>
);