const express = require('express');
const employeeController = require('../controllers/employeeController');

module.exports = (app) => {
    app.get('/employee', employeeController.getEmployees); // Retrieve all emppoloyee from DB
    app.get('/employee/:id', employeeController.getEmployeeById); // Retrieves a single employee by ID from DB
    app.post('/employee', employeeController.createEmployee); // Creates a new employee in DB
    app.patch('/employee/:id', employeeController.updateEmployee); // Updates existing employee by ID in DB
    app.delete('/employee/:id', employeeController.deleteEmployee); //Deletes an employee by ID from DB
};
