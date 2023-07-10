const express = require('express')
const mongoose = require('mongoose')
const User = require('../schemas/users.js')

const router = express.Router();
mongoose.model('User')

// Return all users 
router.get('/', async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).send(data)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await User.findOne({ id: req.params.id });
        console.log(data);
        res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/byEmail/:email', async (req, res) => {
    try {
        const data = await User.findOne({ email: req.params.email });
        if (data === null)
            res.status(404).send(data);
        else
            res.status(200).send(data);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Add an user
router.post('/', async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    try {
        await user.save();
        res.status(200).send({ message: 'User added' });
    } catch (e) {
        res.status(400).send({ message: 'Error to add user: ' + e });
    }
});

//Update order
router.put('/addOrder/:id', async (req, res) => {
    console.log('oi?')
    try {
        console.log(req.body)
        await User.findOneAndUpdate({ id: req.params.id }, {
            $push: {
                orders: {
                    id: req.body.id,
                    name: req.body.name,
                    qty: req.body.qty,
                    price: req.body.price,
                    img: req.body.img
                }
            }
        });
        res.status(200).send({ message: 'Order added' });
    } catch {
        res.status(400).send('Error adding order');
    }
});

// Update user by id
router.put('/:id', async (req, res) => {
    try {
        await User.findOneAndUpdate({ id: req.params.id }, {
            $set: {
                name: req.body.name,
                email: req.body.email,
                address: req.body.address,
                telephone: req.body.telephone,
                profilePic: req.body.profilePic,
            }
        });
        res.status(200).send({ message: 'User updated' });
    } catch {
        res.status(400).send('Error to update user');
    }
});

module.exports = router;