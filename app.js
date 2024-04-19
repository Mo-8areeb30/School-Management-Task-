// app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school_management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Middleware
app.use(bodyParser.json());

// Routes
const teachersRoute = require('./routes/teachers');
const studentsRoute = require('./routes/students');
// Add routes for other entities like managers, departments, finance, grading, e-learning

app.use('/api/teachers', teachersRoute);
app.use('/api/students', studentsRoute);
// Use routes for other entities

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
