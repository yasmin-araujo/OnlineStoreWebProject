import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import './style.css';

export default function Product({ product }) {
    const navigate = useNavigate();
    const isAdmin = localStorage.getItem('isAdmin');

    const handleNavigation = (e) => {
        e.preventDefault();
        isAdmin ? navigate('/editproduct/' + product.id)
            : navigate('/product/' + product.id);
    }

    return (
        <div className="product">
            <button className="product-img" onClick={handleNavigation}>
                <img src={require('../../images/products/' + product.img)} alt={product.name + ' picture'} />
            </button>
            <button className="product-details" onClick={handleNavigation}>
                <Typography variant="textBold">{product.name}</Typography>
                <Typography variant="text">$ {product.price}</Typography>
                <Typography variant="text">Qty: {product.qty}</Typography>
            </button>
        </div>
    );
}
