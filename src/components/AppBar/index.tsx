
import './style.scss';

import { useState } from 'react';
import { Avatar, Box, Grid, IconButton } from '@mui/material';
import { Logout, Menu, MenuOpen } from '@mui/icons-material';
import LogoutDialog from './LogoutDialog';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import DefaultConstants from '../../data/Constants';


const AppBar = () => {
    const { translate } = useLanguageContext();
    const { user } = useUserContext();

    const [openNavigation, setOpenNavigation] = useState<boolean>(false);
    const [openLogoutDialog, setOpenLogoutDialog] = useState<boolean>(false);

    return (
        <>
            <Box component={Grid} container className={`appbar-admin`}>
                <Grid item className='grid-icon'>
                    <img 
                        src={DefaultConstants.system.icon} 
                        alt={DefaultConstants.system.name} 
                        className='icon' 
                    />

                    <img 
                        src={DefaultConstants.system.logoHorizontal} 
                        alt={DefaultConstants.system.name} 
                        className='icon full' 
                    />
                </Grid>
                
                <Grid item className='grid-menu'>
                    <IconButton size="medium" className='iconbutton-action' onClick={() => setOpenNavigation(true)}>
                        {openNavigation ? <MenuOpen fontSize='medium' /> : <Menu fontSize='medium' />}
                    </IconButton>
                </Grid>

                <Grid item className='grid-navigation'>
                    {/* {createShortcuts()} */}
                </Grid>

                <Grid item className='grid-footer'>
                    <IconButton size="medium" className='iconbutton-action iconbutton-logout' onClick={() => setOpenLogoutDialog(true)}>
                        <Logout fontSize='medium' />
                    </IconButton>

                    <Avatar 
                        alt={user?.name.toUpperCase()} 
                        src={user?.name}
                        className='avatar-user'
                    />
                </Grid>
            </Box>

            <LogoutDialog
                title={translate('logout')}
                open={openLogoutDialog} 
                handleClose={() => setOpenLogoutDialog(false)}
            />
        </>
    );
}


export default AppBar;