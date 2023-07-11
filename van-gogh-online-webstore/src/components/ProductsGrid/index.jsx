import { useEffect, useState } from 'react';
import './style.css';
import Product from "../Product";

export default function ProductsGrid({ filter }) {
    const [productsList, setProductsList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProductsList(data);
                setFilteredProducts(!filter.showUnavailable ? data.filter((product) => product.qty > 0) : data);
            })
    }, [])

    useEffect(() => {
        let filteredList = productsList;

        if (filter.price.min !== '') {
            filteredList = filteredList.filter((product) => product.price >= filter.price.min);
        }

        if (filter.price.max !== '') {
            filteredList = filteredList.filter((product) => product.price <= filter.price.max);
        }

        if (filter.collections.find(() => true) !== undefined) {
            filteredList = filteredList.filter((product) => filter.collections.find((col) => col === product.collectionId) !== undefined);
        }

        if (!filter.showUnavailable) {
            filteredList = filteredList.filter((product) => product.qty > 0);
        }

        setFilteredProducts(filteredList);
    }, [filter]);


    return (
        <div className="products-grid">
            {filteredProducts && filteredProducts.map((product, index) => <Product product={product} key={'product-' + index} />)}
        </div>
    );
}
