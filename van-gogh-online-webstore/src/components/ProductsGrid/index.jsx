import { useEffect, useState } from 'react';
import './style.css';
import Product from "../Product";

export default function ProductsGrid({ filter }) {
    let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    const [productsList, setProductsList] = useState(products);

    useEffect(() => {
        let filteredList = products;

        if (filter.price.min !== '') {
            filteredList = filteredList.filter((product) => product.price >= filter.price.min);
        }

        if (filter.price.max !== '') {
            filteredList = filteredList.filter((product) => product.price <= filter.price.max);
        }

        if (filter.collections.find(() => true) !== undefined) {
            filteredList = filteredList.filter((product) => filter.collections.find((col) => col === product.collection) !== undefined);
        }

        if (!filter.showUnavailable) {
            filteredList = filteredList.filter((product) => product.qtd > 0);
        }

        setProductsList(filteredList);
    }, [filter]);


    return (
        <div className="products-grid">
            {productsList.map((product, index) => <Product product={product} key={'product-' + index} />)}
        </div>
    );
}
