import React, { Component } from 'react';
import Form from './subcomponents/Form';

export default class UpdateCourse extends Component {

  state = {
    id: '',
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
    courseDetails: []
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    fetch(`http://localhost:5000/api/courses/${id}`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        id: responseData.course.id,
        title: responseData.course.title,
        description: responseData.course.description,
        estimatedTime: responseData.course.estimatedTime,
        materialsNeeded: responseData.course.materialsNeeded
      });
    })
    .catch(error => {
      console.log('Uh-oh! We ran into an issue while retrieving a the details of a requested course for updating.', error);
    });
  }

  /* Cancel Event */
  actionCancel = () => {
    this.props.history.push(`/`);
  }

  /* Change Event */
  actionChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  /* Form Submit Event */
  actionSubmit = () => {

    const { context } = this.props;
    const authUser = context.authenticatedUser;

    const { id, title, description, materialsNeeded, estimatedTime } = this.state
    const courseInformation = { id, title, description, materialsNeeded, estimatedTime };

    context.data.updateCourse(id, courseInformation, authUser.emailAddress, authUser.password)

    .then( errors => {
      if (errors.length) {
        this.setState({ errors });
      } else {
        console.log(`${title} was successfully updated!`);
        this.props.history.push(`/courses/${this.props.match.params.id}`);    
      }
    }) 
    .catch( err => {
      console.log(err);
      this.props.history.push('/error');
    }); 
  }

  render() {

    const { context } = this.props;
    const { title, description, estimatedTime, materialsNeeded, errors } = this.state;

    return (

      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <Form 
            cancel={this.actionCancel}
            errors={errors}
            submit={this.actionSubmit}
            submitButtonText="Update Course"
            elements={() => (
            <React.Fragment>

              <div className="grid-66">
                <div className="course--header">
                  <h4 className="course--label">Course</h4>
                  <div>
                    <input 
                      className="input-title course--title--input" 
                      id="title" 
                      name="title" 
                      type="text"
                      value={title}
                      onChange={this.actionChange} 
                      placeholder="Course title..." />
                  </div>
                  <p>By {context.authenticatedUser.firstName} {context.authenticatedUser.lastName}</p>
                </div>
                <div className="course--description">
                  <div>
                    <textarea 
                      id="description" 
                      name="description" 
                      placeholder="Course description..." 
                      value={description} 
                      onChange={this.actionChange} />
                  </div>
                </div>
              </div>
              <div className="grid-25 grid-right">
                <div className="course--stats">
                  <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                      <h4>Estimated Time</h4>
                      <div>
                        <input 
                          id="estimatedTime" 
                          name="estimatedTime" 
                          type="text"
                          value={estimatedTime} 
                          onChange={this.actionChange} 
                          placeholder="Hours" />
                      </div>
                    </li>
                    <li className="course--stats--list--item">
                      <h4>Materials Needed</h4>
                      <div>
                        <textarea 
                          id="materialsNeeded" 
                          name="materialsNeeded" 
                          placeholder="List materials..." 
                          value={materialsNeeded} 
                          onChange={this.actionChange} />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
            )} />
        </div>
      </div>

    );
  }

}