const express = require('express');
const employeeController = require('../controllers/employeeController');

module.exports = (app) => {
app.get('/employee/:id', employeeController.getEmployeeById);
app.get('/employee', employeeController.getEmployees);
app.post('/employee', employeeController.createEmployee);
app.patch('/employee/:id', employeeController.updateEmployee);
app.delete('/employee/:id', employeeController.deleteEmployee);
};
