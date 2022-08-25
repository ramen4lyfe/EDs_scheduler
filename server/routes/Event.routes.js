const EventController = require('../controllers/Event.controller')

module.exports = (app) => {
    app.get('/schedule', EventController.getEvent)
    app.get('/schedule/:id', EventController.getEventById)
    app.post('/schedule', EventController.createEvent)
    app.put('/schedule/:id', EventController.updateEvent)
    app.delete('/schedule/:id', EventController.deleteEvent)
};