import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Thanks from './pages/Thanks';
import SalesOverview from './pages/SalesOverview';
import SingleProduct from './pages/SingleProduct';
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';

import { products } from './utils/products';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
let id = undefined;

// Carregar produtos no banco de dados
// try{
	// products.map( product => 
	// fetch('http://localhost:5000/products', {
	// 	method: 'POST',
	// 	headers: {
	// 		  'Content-Type': 'application/json'
	// 	},
	// 	body: JSON.stringify(product)
  	// }));
// } 
// catch(e){
// 	console.log(e);
// }


root.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/thanks" element={<Thanks />} />
					<Route path="/salesoverview" element={<SalesOverview />} />
					<Route path={"/product/:productId"} element={<SingleProduct />} />
					<Route path={"/editproduct/:productId"} element={<EditProduct />} />
					<Route path="/addproduct" element={<AddProduct />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
