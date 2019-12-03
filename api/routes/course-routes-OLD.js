const express = require('express');
const router = express.Router();

// Database
const db = require('../db');
const { Course } = db.models;
const { User } = db.models;

// Require a Validation Library
const { validationResult } = require('express-validator');

// Validation Middleware 
const checkCourse = require('../middleware/checkCourse');

let course;

// Return a list of courses
router.get('/courses', async (req, res, next) => {
  try {
    course = await Course.findAll({
      model: Course,
      attributes: {
        include: ['id', 'userId', 'title', 'description', 'estimatedTime', 'materialsNeeded'],
        exclude: ['createdAt', 'updatedAt']
      },
      include: [{
        model: User,
        attributes: {
          include: ['id', 'firstName', 'lastName', 'emailAddress'],
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      }]
    });
    res.json({course}).status(200);
    //console.log(course);
  } catch (err) {
    console.error("There's been an error: ", err);
  }
});

// Return course by ID
router.get('/courses/:id', async (req, res, next) => {
  try {
    course = await Course.findByPk(req.params.id);
    // console.log(course);
    res.status(200).json({course});
  } catch (err) {
    console.error("There's been an error: ", err);
  }
});

// Create a course
router.post('/courses', checkCourse, async (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    return res.status(400).json({ errors: errorMessages });
  }

  course = req.body;
  //console.log(course);
  const createCourse = await Course.create(course);
  res.location(`/api/courses/${createCourse.id}`).status(201).end();

});

// Update a course
router.put('/courses/:id', checkCourse, async (req, res, next) => {

  try {
    const errors = validationResult(req);
    const course = await Course.findByPk(req.params.id);

    if (!errors.isEmpty()) {
      const errorMessages = errors.array().map(error => error.msg);
      return res.status(400).json({ errors: errorMessages });
    }

    await course.update(req.body);
    res.status(204).json({ course }).end();

  } catch (err) {
    console.error("There's been an error: ", err);
  }

});

// Delete course by ID
router.delete('/courses/:id', async (req, res) => {
  try {
    course = await Course.findByPk(req.params.id);
    // console.log(course);
    course.destroy();
    res.status(204).end();
  } catch (err) {
    console.error("There's been an error: ", err);
  }
});


// Export
module.exports = router;


// To get just title -=-=- You would have to loop through the courses array that is returned from the findAll and then retrieve the title property.
// There is a handy method called findOne which will just give you one course which is good for your /courses/:id route 