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

//Route: students/login
exports.login = (req, res, next)=> {
    //User can log in using either email or userID
    let qry = {};
    if (req.body.hasOwnProperty('userID'))
        qry['userID'] = req.body.userID;
    else if (req.body.hasOwnProperty('email'))
        qry['email'] = req.body.email;
    else 
        return res.status(400).json({message: "Email or UserID was not provided"});

    if (req.body.hasOwnProperty('password')==false)
        return res.status(400).json({message: "Password was not provided"});
    
    Student.find(qry).exec()
    .then(user=> {
        if (user.length < 1) {
            return res.status(401).json({message: "Authorization failed"}); //do not indicate that user doesn't exist for security reasons
        }
        bcrypt.compare(req.body.password, user[0].password)
        .then(result=> {
            if (result) {
                const token = jwt.sign(
                    {   //payload of token
                        userID: user[0].userID,
                        email: user[0].email,
                        accountType: "student"
                    },
                    process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    }
                );

                return res.status(200).json({
                    message: "Authorization successful",
                    token: token
                });
            }
            else {
                return res.status(401).json({message: "Authorization failed"});
            }
        })
        .catch(err=> {
            res.status(401).json({message: "Authorization failed"});
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({error: err});
    });
}
