import { products } from './utils/products';

export const loadProductsToDB =async () => {
    try {
        await fetch('http://localhost:5000/products', {
            method: 'DELETE'
        });
        products.map(product =>
            fetch('http://localhost:5000/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }));
        console.log("All products were successfully loaded into the database.");
    }
    catch (e) {
        console.log(e);
    }
}