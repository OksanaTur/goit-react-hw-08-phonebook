import { useSelector, useDispatch } from 'react-redux';
import * as React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations'; 
import css from './UserMenu.module.css';

const UserMenu = () => {
    const { email, name } = useSelector(getUser);
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    return (
        <div className={css.wrapper}>
            <div>
                <p className={css.name}>{name}</p>
                <p>{email}</p>
            </div>
            <Button
                variant='contained'
                size='small'
                type='button'
                onClick={onLogout}
                endIcon={<LogoutIcon />}
                sx={{
                    ml: 2,
                    mt: 1,
                    mb: 1,
                }}>
                Logout
            </Button>
        </div>
    )
};

export default UserMenu;
