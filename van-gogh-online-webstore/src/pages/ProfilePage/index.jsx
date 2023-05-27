import React, { useEffect, useState } from 'react';

import './style.css';
import Navbar from '../../components/Navbar';
import ProfileMenu from '../../components/ProfileMenu';

import ProfileInformations from '../../components/ProfileInformations';

export default function ProfilePage() {
	const [profilePage, setProfilePage] = useState(<ProfileInformations/>)
	useEffect(
        () => {
            setProfilePage()
        },
        []
    );
	return(
		<>
			<div className='profile'>
				<Navbar/><br/><br/><br/><br/>
				<ProfileMenu/>
				<ProfileInformations/>
			</div>
		</>
	);
}
