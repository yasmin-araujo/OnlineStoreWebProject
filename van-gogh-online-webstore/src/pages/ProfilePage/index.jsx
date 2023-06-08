import React, { useEffect, useState } from 'react';

import './style.css';

import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';

import ProfileInformations from '../../components/ProfileInformations';
import ProfileOrders from '../../components/ProfileOrders';

export default function ProfilePage() {
	const pages = [<ProfileInformations />, <ProfileOrders />]
	const [profilePage, setProfilePage] = useState(pages[0])
	const handleProfileChange = (index) => {
		setProfilePage(pages[index])
	}

	return (
		<>
			<Navbar userStatus={'loggedin'}/>
			<div className='Profile'>
				<ProfileMenu handleProfileChange={handleProfileChange} />
				{profilePage}
			</div>
		</>
	);
}
