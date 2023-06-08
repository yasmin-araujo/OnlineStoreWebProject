import React, { useEffect, useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';

import ProfileInformations from '../../components/ProfileInformations';
import ProfileOrders from '../../components/ProfileOrders';
import ProfileLogout from '../../components/ProfileLogout';

export default function ProfilePage() {
	const pages = [<ProfileInformations />, <ProfileOrders />, <ProfileLogout/>]
	const [profilePage, setProfilePage] = useState(pages[0])
	const handleProfileChange = (index) => {
		setProfilePage(pages[index])
	}

	return (
		<>
			<Navbar bgColor='white'/>
			<div className='profile'>
				<ProfileMenu handleProfileChange={handleProfileChange} />
				{profilePage}
			</div>
		</>
	);
}
