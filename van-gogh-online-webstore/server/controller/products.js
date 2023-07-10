const express = require('express')
const mongoose = require('mongoose')
const Product = require('../schemas/products.js') 

const router = express.Router();
mongoose.model('Product') 

//retorna todos produtos 
router.get('/', async(req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    } catch(e) {
        res.status(404).send(e);
    }
});

router.get('/:id', async(req, res) => {
    try {
        const data = await Product.findOne({id: req.params.id})
        res.status(200).send(data)
    } catch(e) {
        res.status(404).send(e);
    }
});

//adiciona um produto
router.post('/', async (req, res) => {
    const product = new Product(req.body)
    console.log(product)
    try {
        await product.save()
        res.status(200).send({message: 'Product added'});
    } catch(e) {
        console.log('hmmmmm ' + e)
        res.status(404).send('Error to add  product' + e);
    }
});

//atualiza um produto a partir do slug
router.put('/:id', async (req, res) => {
    try {
        await Product.findOneAndUpdate({id: req.params.id}, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                qty: req.body.qty,
                collectionId: req.body.collectionId,
                img: req.body.img
            }
        });
        res.status(200).send({message: 'Product updated'});
    } catch {
        res.status(404).send('Error to update product');
    }
});

//deleta um produto a partir do slug
router.delete('/:id', async (req, res) => {
    try {
        await Product.deleteOne({id: req.params.id})

        res.status(200).send({message: 'Product deleted'});
    } catch(e) {
        res.status(404).send(e);
    }
});

module.exports = router;
