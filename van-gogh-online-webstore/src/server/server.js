import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './controller/products.js'


mongoose.connect('mongodb+srv://van-gogh:vangogh@clusterwebproject.xcx7ftr.mongodb.net/');

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

app.listen(5000, () => {
    console.log('Server is listening on port 3001');
});