const mongoose = require('mongoose');
const course = require('../models/course');

const Course = require('../models/course');

//Route: courses/all
exports.getAllCourses = (req, res, next)=> {
    Course.find().exec()
    .then(results=> {
        let courses = [];
        for (let x of results)
            courses.push(x.name);
        console.log(courses);
        res.status(200).json({result: courses});
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({error: err});
    });
}

// Route: courses/createCourse
exports.createCourse = (req, res, next)=> {
    Course.exists({name: req.body.name})
    .then(data=> {
        if (data) {
            return res.status(409).json({message: "course name taken"});
        }
        let obj = JSON.parse(JSON.stringify(req.body)); 
        let courseObj = new Course(obj);
        return courseObj.save();
    })
    .then(results=> {
        console.log(results);
        res.status(201).json({message: "Course created"});
    })   
    .catch(err=> {
        console.log(err);
        res.status(500).json({error: err});
    });
}