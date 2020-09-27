const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const numVideosUploadLimit = 20;

const storage = multer.diskStorage({
    destination:  (req, file, cb)=> {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb)=> {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname)); //This will be the Video Name
    }
});

const fileFilter = (req, file, cb)=> {
    if (file.mimetype == 'video/mp4')
        cb(null, true);
    else 
        cb(null, false);
}

const upload = multer({storage: storage, fileFilter: fileFilter});

const TeachersController = require('../controllers/teachers');
const checkAuthTeacher = require('../middleware/check-auth-teacher');

router.get('/', (req, res, next)=> {
    res.status(200).json({message: 'Handling GET requests to /teachers'});
});

router.post('/signup', TeachersController.createTeacher);

router.post('/:userID/upload', checkAuthTeacher, upload.array('videos', numVideosUploadLimit), TeachersController.uploadVideos);    //'videos' is the ID in form data

router.post('/login', TeachersController.login);

module.exports = router;