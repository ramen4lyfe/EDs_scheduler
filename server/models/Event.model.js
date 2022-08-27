const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;

const EventSchema = new mongoose.Schema({
    gameName: {
        type: String,
        enum: ['Hostage','B.O.X', 'Nursery'],
        required: [true, 'game name is required'],
    },
    date: {
        type: Date,
        required: [true, 'date is required'],
        //minlength: [5, 'date length should be more than 4 characters']
    },
    startTime: {
        type: String, // Date schema type of Mongoose represents not just a date, but a full date and time timestamp,
        required: [true, 'start time is required'],
        // min: [0, 'invalid start time'],
        // max: [23, 'invalid start time']
    },
    // endTime: {
    //     type: String,// 
    //     required: [true, 'end time is required'],
    //     // min: [1, 'invalid end time'],
    //     // max: [24, 'invalid end time']
    // },
    hostEmployee: { 
        type : String, 
        // type : ObjectId, 
        required: [true, 'Select a Host'],
        enum:['Quang', 'Peter', 'HHH'],
        // ref: "User",
    },
    gmEmployee: { 
        type : String,
        // type : ObjectId, 
        required: [true, 'Select a GM'], 
        enum:['Quang', 'Peter', 'HHH'],

        // ref: "User",
    }
    }, 
    {timestamps: true}
);

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;