const mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectId;

const ShiftsSchema = new mongoose.Schema({

},
{timestamps: true}
);

const Shifts = mongoose.model('Shifts', ShiftsSchema); 
// This code exports a Mongoose model called Shifts. The model is created using the mongoose.model() method, which takes two arguments:
// The name of the model (as a string), which is 'Shifts' in this case.
// The Mongoose schema for the model, which is ShiftsSchema.

module.exports = Shifts