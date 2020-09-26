const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Student = require('../models/student');

const saltAmount = 10;
const tokenExpireTime = "1h";

// Route: /students/signup
exports.createStudent = (req, res, next)=> {
    if (!req.body.hasOwnProperty('email') || !req.body.hasOwnProperty('userID') || !req.body.hasOwnProperty('password')) {
        return res.status(400).json({message: "Missing required details"});
    }

    Student.exists({userID: req.body.userID})
    .then(data1=> {
        if (data1) {
            return res.status(409).json({message: "User ID taken"});
        }
        Student.exists({email: req.body.email})
        .then(data2=> {
            if (data2) {
                return res.status(409).json({message: "Email ID taken"});
            }
            let obj = JSON.parse(JSON.stringify(req.body));    //copying body elements
            //hash the password
            bcrypt.hash(obj['password'], saltAmount)
            .then(hash=> {
                    obj['password'] = hash;
                    obj['email'] = obj['email'].toLowerCase();
                    let studentObj = new Student(obj);
                    return studentObj.save()
            }) 
            .then(results=> {
                console.log(results);
                res.status(201).json({message: "Student user created"});
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
