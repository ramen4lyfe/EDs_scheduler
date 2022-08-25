const User = require('../models/User.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUsers: (req, res) => {
        User.find({})
        .then((AllUsers) => {
            res.json(AllUsers);
        })
        .catch((err) => {
            console.log('ERROR IN getAllUsers', err);
            res.status(400).json({ message: 'Check getAllUsers, something went wrong with it', error: err });
        });
    },
    getUserById: (req, res) => {
        User.findOne({ _id: req.params.id })
        .populate('hostingEvents')
        .populate('gameMasterEvents')
        .then((OneUser) => {
            res.json(OneUser);
        })
        .catch((err) => {
            console.log('ERROR IN getUserById', err);
            res.status(400).json({ message: 'Check getUserById, something went wrong with it', error: err });
        });
    },
    createUser: (req, res) => {
        User.create(req.body)
        .then((NewUser) => {
            res.status(201).json(NewUser);
        })
        .catch((err) => {
            console.log('ERROR IN createUser', err);
            res.status(400).json({ message: 'Check createUser, something went wrong with it', error: err });
        });
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
        .then((UpdatedUser) => {
            res.json(UpdatedUser);
        })
        .catch((err) => {
            console.log('ERROR IN updateUser', err);
            res.status(400).json({ message: 'Check updateUser, something went wrong with it', error: err });
        });
    },
    deleteUser: (req, res) => {
        User.deleteOne({ _id: req.params.id })
        .then((DeleteResponse) => {
            res.json(DeleteResponse);
        })
        .catch((err) => {
            console.log('ERROR IN deleteUser', err);
            res.status(400).json({ message: 'Check deleteUser, something went wrong with it', error: err });
        });
    },
    login: async(req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if(user === null) { // email not found in users collection
            return res.status(400).json({ message: 'email required' });;
        }

        // let's compare the supplied password to the hashed password in the database
        const correctPassword = await bcrypt.compare(req.body.password, user.password);
    
        if(!correctPassword) {  // password wasn't a match!
            return res.status(400).json({ message: 'wrong password' });;
        }
    
        // the password was correct
        const userToken = jwt.sign({
        id: user._id
        }, process.env.FIRST_SECRET_KEY);
    
        res.cookie("usertoken", userToken, process.env.FIRST_SECRET_KEY, {
            httpOnly: true
        })
        .json(user);
    }
};