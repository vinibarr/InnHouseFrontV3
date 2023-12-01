
import './style.scss';
import { Logout } from "@mui/icons-material";
import { Avatar, Box, Dialog, Divider, ListItemIcon, MenuItem, Typography } from "@mui/material";
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import { AccessProfileData, AccessProfileEnum } from '../../data/Enums';


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
                        src={user?.name} 
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
                
                <MenuItem className='menuitem-profileitem logout' onClick={handleOpenLogoutDialog}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    
                    {translate('logout')}
                </MenuItem>
            </Dialog>
        </>
    );
}

export default ProfileMenu;