import React, { useEffect, useState } from 'react';

import './style.css';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import NavbarDrawer from '../NawbarDrawer';
import { pages, pages_admin, pages_user } from './pages';

export default function Navbar({ userStatus }) {
    const isMobile = useMediaQuery(useTheme().breakpoints.down('md'));
    const [pagesHeader, setPagesHeader] = useState(pages);

    useEffect(
        () => {
            setPagesHeader(userStatus === 'loggedin' ? pages_user : userStatus === 'admin' ? pages_admin : pages);
        },
        [userStatus]
    );

    return (
        <AppBar sx={{ background: 'none', boxShadow: 'none', padding: '25px 112px' }}>
            <Toolbar>
                <Typography variant="headerTitle" sx={{ width: '220px' }}>
                    VAN GOGH STORE
                </Typography>
                {isMobile ? (
                    <NavbarDrawer pages={pagesHeader} />
                ) : (
                    <div className="links-navbar">
                        {pagesHeader.map(
                            (page) => (
                                <Link to={page.href}>
                                    <Typography variant="headerLink">{page.label}</Typography>
                                </Link>
                            )
                        )}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
}
