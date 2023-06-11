import React, { useEffect, useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavbarDrawer from '../NavbarDrawer';
import { pages, pages_admin, pages_user } from './pages';

export default function Navbar({ bgColor = 'none', fontColor = 'black'}) {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const [pagesHeader, setPagesHeader] = useState(pages);

    let userStatus = localStorage.getItem('session');
    useEffect(
        () => {
            setPagesHeader(userStatus !== null ? pages_user : userStatus === 'admin' ? pages_admin : pages);
        },
        [userStatus]
    );

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
