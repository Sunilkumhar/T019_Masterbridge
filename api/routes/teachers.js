const express = require('express');
const router = express.Router();

const TeachersController = require('../controllers/teachers');

router.get('/', (req, res, next)=> {
    res.status(200).json({message: 'Handling GET requests to /teachers'});
});

router.post('/signup', TeachersController.createTeacher);

module.exports = router;