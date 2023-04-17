import * as React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Home } from '@mui/icons-material';
import UserAuth from './UserAuth/UserAuth';
import { useSelector } from 'react-redux';
import { isUserLogin } from 'redux/auth/auth-selectors';
import UserMenu from './UserMenu/UserMenu';

const NavBar = () => {
    const isLogin = useSelector(isUserLogin);
    return (
        <AppBar position='static' component='header' sx={{ background: '#3D76DA' }}>
            <Container maxWidth='x1'>
                <Toolbar disableGutters component='nav'>
                    <Home sx={{ display: { md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/goit-react-hw-08-phonebook'
                        sx={{
                            mr: 12,
                            display: { md: 'flex' },
                            fontFamily: 'roboto',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        Home
                    </Typography>
                    {isLogin && (
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/goit-react-hw-08-phonebook/contacts"
                            sx={{
                                mr: 12,
                                display: { md: 'flex' },
                                fontFamily: 'roboto',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Contacts
                        </Typography>
                    )}
                    {!isLogin && <UserAuth />}
                    {isLogin && <UserMenu />}
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default NavBar;