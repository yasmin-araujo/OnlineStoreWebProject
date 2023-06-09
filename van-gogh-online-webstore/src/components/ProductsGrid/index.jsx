import './style.css';

import { products } from "../../pages/ProductsPage/products";
import Product from "../Product";

export default function ProductsGrid() {
    return (
        <div className="products-grid">
            {products.map((product, index) => <Product product={product} key={'product-' + index} />)}
        </div>
    );
}
