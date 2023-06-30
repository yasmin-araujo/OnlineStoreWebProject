const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://van-gogh:vangogh@clusterwebproject.xcx7ftr.mongodb.net/');

const Product = mongoose.model('Product') 

const productRoutes = require('./controller/products')

const app = express();
app.use('/products', productRoutes)
app.use(express.json());
app.use((req, res, next) => {
    const date = new Date();
    console.log(`Request Method: ${req.method}`);
    console.log(`Current Date: ${date}`);
    next();
});


app.use('/products', productRoutes)

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
});