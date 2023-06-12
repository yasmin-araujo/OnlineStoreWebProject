import React, { useEffect, useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavbarDrawer from '../NavbarDrawer';
import { pages, pages_user, pages_admin } from './pages';

export default function Navbar({ bgColor = 'none', fontColor = 'black' }) {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const [pagesHeader, setPagesHeader] = useState(pages);

    const userStatus = localStorage.getItem('session');
    const isAdmin = localStorage.getItem('isAdmin');

    useEffect(() => {
        if(isAdmin) {
            setPagesHeader(pages_admin);
        }
        else {
            setPagesHeader(userStatus !== null ? pages_user : pages);
        }
    }, [userStatus, isAdmin]);

    return (
        <AppBar sx={{ background: bgColor, boxShadow: 'none', padding: '10px 136px', transition: '0.4s' }}>
            <Toolbar>
                <Link to={'/'} key={'navbar-title'} className='title-navbar'>
                    <Typography variant="headerTitle" sx={{ color: fontColor }}>
                        VAN GOGH STORE
                    </Typography>
                </Link>
                {isMobile ? (
                    <NavbarDrawer pages={pagesHeader} />
                ) : (
                    <div className="links-navbar">
                        {pagesHeader.map(
                            (page) => (
                                <Link to={page.href} key={'navbar-' + page.label}>
                                    <Typography variant="headerLink" sx={{ color: fontColor }}>{page.label}</Typography>
                                </Link>
                            )
                        )}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
