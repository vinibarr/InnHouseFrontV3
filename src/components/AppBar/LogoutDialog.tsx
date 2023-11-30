
import { Typography } from '@mui/material';
import { useLanguageContext } from '../../contexts/LanguageContext';
import Dialog, { IDialogProps } from '../Dialog';
import { ActionButton } from '../Button';
import { useUserContext } from '../../contexts/UserContext';
import { useMemo } from 'react';

const LogoutDialog: React.FC<Pick<IDialogProps, 'title' | 'open' | 'handleClose'>> = ({ title, open, handleClose }) => {
    const { translate } = useLanguageContext();
    const { handleLogout } = useUserContext();

    const dialogActions = useMemo(() => {
        return (
            <>
                <ActionButton
                    action="no"
                    onClick={handleClose}
                />

                <ActionButton
                    action="yes"
                    onClick={handleLogout}
                />
            </>
        );
        // eslint-disable-next-line
    }, [translate]);
    

    return (
        <Dialog 
            open={open}
            showCloseButton={false}
            handleClose={handleClose}
            title={title}
            dialogActions={dialogActions}
            className='dialogactions-spacebetween'
            maxWidth='xs'
            fullWidth={true}
        >
            <Typography variant='body1'>
                {translate('_logoutDialogDescription')}
            </Typography>
        </Dialog>
    );
}

export default LogoutDialog;