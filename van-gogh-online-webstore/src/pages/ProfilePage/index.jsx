import React, { useEffect, useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';

import ProfileInformations from '../../components/ProfileInformations';
import ProfileOrders from '../../components/ProfileOrders';

export default function ProfilePage() {
	const pages = [<ProfileInformations/>, <ProfileOrders/>]
	const [profilePage, setProfilePage] = useState(pages)
	const handleProfileChange = (index) => {
		setProfilePage(pages[index])
	}
	
	return(
		<>
			<div className='profile'>
				<Navbar/>
				<ProfileMenu handleProfileChange={handleProfileChange}/>
				{profilePage}
			</div>
		</>
	);
}
