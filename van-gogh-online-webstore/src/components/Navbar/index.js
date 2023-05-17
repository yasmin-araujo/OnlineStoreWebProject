import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

import './style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<AppBar>
			<Toolbar>Van Gogh</Toolbar>
		</AppBar>
	);
}
