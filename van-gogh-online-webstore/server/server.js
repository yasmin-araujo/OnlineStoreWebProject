const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./controller/products.js')
const userRoutes = require('./controller/users.js')


mongoose.connect('mongodb+srv://van-gogh:vangogh@clusterwebproject.xcx7ftr.mongodb.net/webapp');

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const date = new Date();
    console.log(req.url)
    console.log(`Request Method: ${req.method}`);
    console.log(`Current Date: ${date}`);
    next();
});

app.use('/products', productRoutes)
app.use('/users', userRoutes)

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
});