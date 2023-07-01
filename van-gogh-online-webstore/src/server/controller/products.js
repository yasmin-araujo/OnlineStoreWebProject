import express from "express"
import mongoose from "mongoose";

const router = express.Router();
const Product = mongoose.model('Product') 

//retorna todos produtos 
router.get('/', async(req, res) => {
    try {
        const data = await Product.find()
        res.status(200).send(data)
    } catch(e) {
        res.status(404).send(e);
    }
});

//adiciona um produto
router.post('/', async (req, res) => {
    const product = new Product(req.body)
    try {
        await product.save()
        res.status(200).send({message: 'Product added'});
    } catch {
        res.status(404).send('Error to add  product');
    }
});

//atualiza um produto a partir do slug
router.put('/:id', async (req, res) => {
    try {
        await Product.findOneAndUpdate({slug: req.params.id}, {
            $set: {
                name: req.body.name,
                slug: req.body.slug,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity
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
        await Product.deleteOne({slug: req.params.id})

        res.status(200).send({message: 'Product deleted'});
    } catch {
        res.status(404).send('Error to delete post');
    }
});

export default router