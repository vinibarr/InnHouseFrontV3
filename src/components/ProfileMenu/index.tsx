
import './style.scss';
import { AccountCircle, Logout } from "@mui/icons-material";
import { Avatar, Box, Dialog, Divider, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import { AccessProfileData, AccessProfileEnum } from '../../data/Enums';
import MyProfileDialog from './MyProfileDialog';
import { useState } from 'react';


interface IProfileMenuProps {
    open: boolean;
    handleClose: () => void;
    handleOpenLogoutDialog: () => void;
}


const ProfileMenu: React.FC<IProfileMenuProps> = ({ 
    open,
    handleClose,
    handleOpenLogoutDialog,
}) => {
    const { translate } = useLanguageContext();
    const { user } = useUserContext();

    const [openMyProfileDialog, setOpenMyProfileDialog] = useState<boolean>(false);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    className: 'paper-profilemenu'
                }}
            >
                <Box component='div' className='box-userprofile'>
                    <Avatar 
                        alt={user?.name.toUpperCase()} 
                        src={user?.avatar} 
                        className='avatar-userimage'
                    />
                    
                    <Typography variant='subtitle1' component='h5' className='text-title'>
                        {user?.name}
                    </Typography>
                    
                    <Typography variant='subtitle2' component='h6' className='text-subtitle'> 
                        {translate(AccessProfileData[user?.id_grupousuario ?? AccessProfileEnum.Guest].name)} 
                    </Typography>
                </Box>

                <Divider className='divider-menuitem' />

                <MenuItem className='menuitem-profileitem' onClick={() => setOpenMyProfileDialog(true)}>
                    <ListItemIcon>
                        <AccountCircle fontSize="small" />
                    </ListItemIcon>

                    {translate('myProfile')}
                </MenuItem>

                <Divider className='divider-menuitem' />
                
                <MenuItem className='menuitem-profileitem logout' onClick={handleOpenLogoutDialog}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    
                    {translate('logout')}
                </MenuItem>
            </Dialog>

            <MyProfileDialog 
                title={''} 
                open={openMyProfileDialog} 
                handleClose={() => setOpenMyProfileDialog(false)} 
            />
        </>
    );
}

export default ProfileMenu;