const UserController = require('../controllers/User.controller');

module.exports = (app) => {
     app.get('/api/user', UserController.getAllUsers);
     app.get('/api/user/:id', UserController.getUserById);
     app.post('/api/user', UserController.createUser);
     app.put('/api/user/:id', UserController.updateUser);
     app.delete('/api/user/:id', UserController.deleteUser);
     app.post('/api/user/login', UserController.login);
 };