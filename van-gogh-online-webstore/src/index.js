import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/products" element={<ProductsPage />} /> */}
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
