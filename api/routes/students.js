const express = require('express');
const router = express.Router();

const StudentsController = require('../controllers/students');

router.get('/', (req, res, next)=> {
    res.status(200).json({message: 'Handling GET requests to /students'});
});

router.post('/signup', StudentsController.createStudent);

module.exports = router;