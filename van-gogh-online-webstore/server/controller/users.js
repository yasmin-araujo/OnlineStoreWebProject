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

module.exports = router;