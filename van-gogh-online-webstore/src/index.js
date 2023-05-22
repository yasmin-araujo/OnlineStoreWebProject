import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import reportWebVitals from './reportWebVitals';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
// import ProductsPage from './pages/ProductsPage';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				{/* <Route path="/products" element={<ProductsPage />} /> */}
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
