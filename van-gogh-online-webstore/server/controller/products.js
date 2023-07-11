const express = require('express')
const mongoose = require('mongoose')
const Product = require('../schemas/products.js')

const router = express.Router();
mongoose.model('Product')

//retorna todos produtos 
router.get('/', async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Product.findOne({ id: req.params.id })
        res.status(200).send(data)
    } catch (e) {
        res.status(400).send(e);
    }
});

//adiciona um produto
router.post('/', async (req, res) => {
    const product = new Product(req.body)
    console.log(product)
    try {
        await product.save()
        res.status(200).send({ message: 'Product added' });
    } catch (e) {
        res.status(400).send('Error to add product' + e);
    }
});

//atualiza um produto a partir do id
router.put('/:id', async (req, res) => {
    try {
        await Product.findOneAndUpdate({ id: req.params.id }, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                qty: req.body.qty,
                collectionId: req.body.collectionId,
                img: req.body.img
            }
        });
        res.status(200).send({ message: 'Product updated' });
    } catch {
        res.status(400).send('Error to update product');
    }
});

//atualiza o estoque de um produto
router.put('/updateStock/:id', async (req, res) => {
    try {
        await Product.findOneAndUpdate({ id: req.params.id }, {
            $inc: { qty: (req.body.qty)*-1 }
        });
        res.status(200).send({ message: 'Product updated' });
    } catch (e) {
        res.status(400).send(e);
    }
})

//deleta um produto a partir do id
router.delete('/:id', async (req, res) => {
    try {
        await Product.deleteOne({ id: req.params.id })

        res.status(200).send({ message: 'Product deleted' });
    } catch (e) {
        res.status(400).send(e);
    }
});

//deleta todos os produtos
router.delete('/', async(req, res) => {
    try {
        await Product.deleteMany()
        res.status(200).send({ message: 'Products deleted' });
    } catch (e) {
        res.status(400).send(e);
    }
})


module.exports = router;
