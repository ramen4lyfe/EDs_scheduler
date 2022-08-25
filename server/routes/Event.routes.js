const eventController = require('../controllers/Event.controller');

module.exports = (app) => {
    app.get('/schedule', eventController.getEvent)
    app.get('/schedule/:id', eventController.getEventById)
    app.post('/schedule', eventController.createEvent)
    app.put('/schedule/:id', eventController.updateEvent)
    app.delete('/schedule/:id', eventController.deleteEvent)
};