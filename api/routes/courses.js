const express = require('express');
const router = express.Router();

const CoursesController = require('../controllers/courses');

router.get('/', (req, res, next)=> {
    res.status(200).json({message: 'Handling GET requests to /courses'});
});

router.get('/all', CoursesController.getAllCourses);

router.post('/createCourse', CoursesController.createCourse);

module.exports = router;