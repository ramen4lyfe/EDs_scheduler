const Event = require('../models/Event.model');

module.exports = {
    getEvent: (req, res) => {
        Event.find({})
        .then((events) => {
            res.json(events);
        })
        .catch((err) => {
            console.log('ERROR IN Get all Events', err);
            res.status(400).json({ message: 'something went wrong in find all Events', error: err });
        });
    },
    getEventById: (req, res) => {
        Event.findOne({ _id: req.params.id })
        .populate('hostEmployee')
        .populate('gmEmployee')
        .then((event) => {
            res.json(event);
        })
        .catch((err) => {
            console.log('ERROR IN Get Event by ID', err);
            res.status(400).json({ message: 'something went wrong in find Event by ID', error: err });
        });
    },
    getEventByMonth: (req, res) => {
        let start = new Date(req.params.month);
        let month = start.getMonth() + 3;
        let year = start.getFullYear();
        let end = new Date(year +"-"+month);

        Event.find({date: {"$gte": start, "$lte": end}})
        .then((events) => {
            res.json(events);
        })
        .catch((err) => {
            console.log('ERROR IN Get Event by Month', err);
            res.status(400).json({ message: 'something went wrong in find Event by Month', error: err });
        });
    },
    getEventByDay: (req, res) => {
        Event.find({date: new Date(req.params.day)})
        .then((events) => {
            res.json(events);
        })
        .catch((err) => {
            console.log('ERROR IN Get Event by Day', err);
            res.status(400).json({ message: 'something went wrong in find Event by Day', error: err });
        });
    },
    getEventByRange: (req, res) => {
        let start = new Date(req.params.start);
        start.setUTCHours(0);
        Event.find({date: {"$gte": start, "$lte": new Date(req.params.end)}})
        .then((events) => {
            res.json(events);
        })
        .catch((err) => {
            console.log('ERROR IN Get Event by Month', err);
            res.status(400).json({ message: 'something went wrong in find Event by Month', error: err });
        });
    },
    createEvent: (req, res) => {
        Event.create(req.body)
        .then((event) => {
            res.status(201).json(event);
        })
        .catch((err) => {
            console.log('ERROR IN create Event', err);
            res.status(400).json({ message: 'something went wrong in create Event', error: err });
        });
    },
    updateEvent: (req, res) => {
        Event.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((event) => {
            res.json(event);
        })
        .catch((err) => {
            console.log('ERROR IN update Event', err);
            res.status(400).json({ message: 'something went wrong in update Event', error: err });
        });
    },
    deleteEvent: (req, res) => {
        Event.deleteOne({ _id: req.params.id })
        .then((event) => {
            res.json(event);
        })
        .catch((err) => {
            console.log('ERROR IN delete Event', err);
            res.status(400).json({ message: 'something went wrong in delete Event', error: err });
        });
    }
};