import React, { Component } from 'react';
import Form from './subcomponents/Form';

export default class UpdateCourse extends Component {

  state = {
    errors: [],
  };

  /* Cancel Event */
  actionCancel = () => {
    this.props.history.push(`/`);
  }

  render() {

    const {
      errors
    } = this.state;

    return (

      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <Form 
            cancel={this.actionCancel}
            errors={errors}
            submit={this.actionSubmit}
            submitButtonText="Create Course"
            elements={() => (
            <React.Fragment>

            </React.Fragment>
            )} />
        </div>
      </div>

    );
  }

}