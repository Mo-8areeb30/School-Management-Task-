// routes/teachers.js

const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

/**
 * @route   GET /api/teachers
 * @desc    Get all teachers
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * @route   POST /api/teachers
 * @desc    Create a new teacher
 * @access  Public
 */
router.post('/', async (req, res) => {
  const teacher = new Teacher({
    name: req.body.name,
    subjectTaught: req.body.subjectTaught
    // Add more fields as needed
  });

  try {
    const newTeacher = await teacher.save();
    res.status(201).json(newTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Add routes for other CRUD operations like PUT and DELETE

/**
 * @route   GET /api/teachers/:id
 * @desc    Get a single teacher by ID
 * @access  Public
 */
router.get('/:id', getTeacher, (req, res) => {
  res.json(res.teacher);
});

/**
 * @route   PUT /api/teachers/:id
 * @desc    Update a teacher by ID
 * @access  Public
 */
router.put('/:id', getTeacher, async (req, res) => {
  if (req.body.name != null) {
    res.teacher.name = req.body.name;
  }
  if (req.body.subjectTaught != null) {
    res.teacher.subjectTaught = req.body.subjectTaught;
  }
  // Update more fields as needed
  try {
    const updatedTeacher = await res.teacher.save();
    res.json(updatedTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * @route   DELETE /api/teachers/:id
 * @desc    Delete a teacher by ID
 * @access  Public
 */
router.delete('/:id', getTeacher, async (req, res) => {
  try {
    await res.teacher.remove();
    res.json({ message: 'Teacher deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single teacher by ID
async function getTeacher(req, res, next) {
  let teacher;
  try {
    teacher = await Teacher.findById(req.params.id);
    if (teacher == null) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.teacher = teacher;
  next();
}

module.exports = router;
