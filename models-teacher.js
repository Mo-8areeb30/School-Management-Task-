// models/Teacher.js

const mongoose = require('mongoose');

/**
 * Teacher Schema
 */
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subjectTaught: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Teacher', teacherSchema);
