const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectId;

const ShiftsSchema = new mongoose.Schema({
    shiftPeriod: {
        type: String,
        enum: ['Afternoon', 'Evening'],
        required: [true, 'Please select the shift'],
    },
    date: {
        type: Date,
        required: [true, 'date is required'],
    },
    employee: {
        type: String,
        required: [true,'Select an employee'],
        enum:['Quang', 'Peter', 'HHH'],
    }
},
{timestamps: true}
);

const Shifts = mongoose.model('Shifts', ShiftsSchema); 
// This code exports a Mongoose model called Shifts. The model is created using the mongoose.model() method, which takes two arguments:
// The name of the model (as a string), which is 'Shifts' in this case.
// The Mongoose schema for the model, which is ShiftsSchema.

module.exports = Shifts