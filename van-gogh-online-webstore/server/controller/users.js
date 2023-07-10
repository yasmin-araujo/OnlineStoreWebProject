const express = require('express')
const mongoose = require('mongoose')
const User = require('../schemas/users.js') 

const router = express.Router();
mongoose.model('User') 

// Return all users 
router.get('/', async(req, res) => {
    try {
        const data = await User.find()
        res.status(200).send(data)
    } catch(e) {
        res.status(404).send(e);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const data = await User.findOne({id: req.params.id})
        res.status(200).send(data)
    } catch(e) {
        res.status(404).send(e);
    }
});

router.get('/byEmail/:email', async(req, res) => {
    try {
        const data = await User.findOne({email: req.params.email});
        console.log(data);
        res.status(200).send(data);
    } catch(e) {
        res.status(404).send(e);
    }
});

// Add an user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    try {
        await user.save();
        res.status(200).send({message: 'User added'});
    } catch(e) {
        res.status(404).send({message: 'Error to add user: ' + e});
    }
});

module.exports = router;