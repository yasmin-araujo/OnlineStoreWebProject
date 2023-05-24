import React, { useState } from 'react';

import { Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import MenuIcon from '@mui/icons-material/Menu';
import './style.css';

export default function NavbarDrawer({ pages }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (e, href) => {
        e.preventDefault();
        navigate(href);
    }

    return (
        <>
            <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <div className='header-row'><Typography variant="headerTitle">VAN GOGH STORE</Typography></div>
                <List>
                    {pages.map((page) =>
                        <ListItemButton onClick={(e) => handleNavigation(e, page.href)}>
                            <ListItemText>
                                <Typography variant='headerLink' className='links'>{page.label}</Typography>
                            </ListItemText>
                        </ListItemButton>)}
                </List>
            </Drawer>
            <IconButton sx={{ color: 'black', marginLeft: 'auto' }}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <MenuIcon />
            </IconButton>
        </>
    );
}