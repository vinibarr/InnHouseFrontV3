
import './style.scss';

import { useState } from 'react';
import { Avatar, Box, Grid, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import LogoutDialog from './LogoutDialog';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import DefaultConstants from '../../data/Constants';
import ProfileMenu from '../ProfileMenu';
import { history } from '../../router/History';


const AppBar = () => {
    const { translate } = useLanguageContext();
    const { user } = useUserContext();

    const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);
    const [openProfileMenu, setOpenProfileMenu] = useState<boolean>(false);

    return (
        <>
            <Box component={Grid} container className={`appbar-admin`}>
                <Grid item className='grid-icon'>
                    <img 
                        src={DefaultConstants.system.icon} 
                        alt={DefaultConstants.system.name} 
                        className='icon' 
                        onClick={() => history.push('/my-properties')}
                    />

                    <img 
                        src={DefaultConstants.system.logoHorizontal} 
                        alt={DefaultConstants.system.name} 
                        className='icon full' 
                        onClick={() => history.push('/my-properties')}
                    />
                </Grid>

                <Grid item className='grid-footer'>
                    <IconButton size="medium" className='iconbutton-action iconbutton-logout' onClick={() => setOpenLogoutDialog(true)}>
                        <Logout fontSize='medium' />
                    </IconButton>

                    <Avatar 
                        alt={user?.name.toUpperCase()} 
                        src={user?.avatar}
                        className='avatar-user'
                        onClick={() => setOpenProfileMenu(true)}
                    />
                </Grid>
            </Box>

            <LogoutDialog
                title={translate('logout')}
                open={openLogoutDialog} 
                handleClose={() => setOpenLogoutDialog(false)}
            />

            <ProfileMenu 
                open={openProfileMenu}
                handleClose={() => setOpenProfileMenu(false)}
                handleOpenLogoutDialog={() => setOpenLogoutDialog(true)}
            />
        </>
    );
}


export default AppBar;