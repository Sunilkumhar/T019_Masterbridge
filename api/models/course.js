const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    name: {     //primary key
        type: String, 
        required: [true, "course name required"],
        trim: true,
        index: {unique: true}
    },
    description: String,
    teacher: {
        type: String, 
        required: [true, "owner of required"],
        trim: true,
    },
    students: {
        type: [String],
        default: []
    }
},
{versionKey: false}
);

module.exports = mongoose.model('Course', courseSchema);