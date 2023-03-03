const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Employee name is required']
  },
  // You could add more fields here, such as email, phone number, etc.
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;


// to avoid using enum in Shift model. creating an employee schema