import { Typography } from "@mui/material";
import './style.css';

export default function Product({ product }) {
    return (
        <div className="product">
            <div className="product-img">
                <img src={require('../../pages/ProductsPage/products-images/' + product.img)} alt={product.name + ' picture'} />
            </div>
            <div className="product-details">
                <Typography variant="textBold">{product.name}</Typography>
                <Typography variant="text">$ {product.price}</Typography>
                <Typography variant="text">Qty: {product.qtd}</Typography>
            </div>
        </div>
    );
}
