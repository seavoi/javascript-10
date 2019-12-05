import React from 'react';

const CourseList = props => {

	const detail = props.data;
	let courseDetails = detail.map(courseDetail => 
		<courseDetail 
			key={courseDetail.id} 
			title={courseDetail.title} 
			description={courseDetail.description} 
			firstName={courseDetail.User.firstName} 
			lastName={courseDetail.User.lastName}
			estimatedTime={courseDetail.estimatedTime}
			materialsNeeded={courseDetail.materialsNeeded} />
	);

	return(
		<div>
			<div class="actions--bar">
	      <div class="bounds">
	        <div class="grid-100"><span><a class="button" href="update-course.html">Update Course</a><a class="button" href="#">Delete Course</a></span><a
	            class="button button-secondary" href="index.html">Return to List</a></div>
	      </div>
	    </div>
	    <div class="bounds course--detail">
	      <div class="grid-66">
	        <div class="course--header">
	          <h4 class="course--label">Course</h4>
	          <h3 class="course--title">{props.title}</h3>
	          <p>By {props.firstName} {props.lastName}</p>
	        </div>
	        <div class="course--description">
	          {props.description}
	        </div>
	      </div>
	      <div class="grid-25 grid-right">
	        <div class="course--stats">
	          <ul class="course--stats--list">
	            <li class="course--stats--list--item">
	              <h4>Estimated Time</h4>
	              <h3>{props.estimatedTime}</h3>
	            </li>
	            <li class="course--stats--list--item">
	              <h4>Materials Needed</h4>
	              <ul>
	                {courseDetails}
	              </ul>
	            </li>
	          </ul>
	        </div>
	      </div>
	    </div>
    </div>
	);

}

export default CourseList;