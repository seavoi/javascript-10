'use strict';

// load modules
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
//const sequelize = require('../models').sequelize;

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// Database
const db = require('./models');

// create the Express app
const app = express();

// Enable All CORS Requests
app.use(cors());

// Setup JSON Parsing
app.use(express.json());

// setup morgan which gives us http request logging
app.use(morgan('dev'));

// Course Route
const courseRoute = require('./routes/course-routes');
app.use('/api', courseRoute);

// User Route
const userRoute = require('./routes/user-routes');
app.use('/api', userRoute);

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});

// set our port
app.set('port', process.env.PORT || 5000);

// start listening on our port
//sequelize.sync().then();
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
