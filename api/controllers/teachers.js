const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Teacher = require('../models/teacher');

const saltAmount = 10;
const tokenExpireTime = "1h";

// Route: /teachers/signup
exports.createTeacher = (req, res, next)=> {
    if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('userID') || !req.body.hasOwnProperty('password')) {
        return res.status(400).json({message: "Missing required details"});
    }

    Teacher.exists({userID: req.body.userID})
    .then(data1=> {
        if (data1) {
            return res.status(409).json({message: "User ID taken"});
        }
        Teacher.exists({email: req.body.email})
        .then(data2=> {
            if (data2) {
                return res.status(409).json({message: "Email ID taken"});
            }
            let obj = JSON.parse(JSON.stringify(req.body));    //copying body elements
            obj.specialization = obj.specialization.split(",");     //FRONT END HANLDED COMMA INPUT
            //hash the password
            bcrypt.hash(obj['password'], saltAmount)
            .then(hash=> {
                    obj['password'] = hash;
                    obj['email'] = obj['email'].toLowerCase();
                    let teacherObj = new Teacher(obj);
                    return teacherObj.save()
            }) 
            .then(results=> {
                console.log(results);
                res.status(201).json({message: "Teacher user created"});
            })   
            .catch(err=> {
                console.log(err);
                res.status(500).json({error: err});
            });
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error: err});
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({error: err});
    });
}

exports.uploadVideos = (req, res, next)=> {
    try {
        return res.status(201).json({
            message: 'Files uploded successfully'
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({error: error});
    }
}
