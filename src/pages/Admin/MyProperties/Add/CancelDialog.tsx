
import { Typography } from '@mui/material';
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import Dialog from '../../../../components/Dialog';
import { ActionButton } from '../../../../components/Button';
import { useMemo } from 'react';
import { IDefaultDialogProps } from '../../../../components/Dialog';
import { history } from '../../../../router/History';

const CancelDialog: React.FC<IDefaultDialogProps> = ({ open, handleClose }) => {
    const { translate } = useLanguageContext();
    
    const dialogActions = useMemo(() => {
        return (
            <>
                <ActionButton
                    action="no"
                    onClick={handleClose}
                />

                <ActionButton
                    action="yes"
                    onClick={() => history.goBack()}
                />
            </>
        );
        // eslint-disable-next-line
    }, [translate]);
    

    return (
        <Dialog 
            open={open}
            handleClose={handleClose}
            title={translate('cancel')}
            dialogActions={dialogActions}
            className='dialogactions-spacebetween'
            maxWidth='xs'
            fullWidth={true}
        >
            <Typography variant='body1'> {translate('_propertyCancelDialogDescription')} </Typography>
        </Dialog>
    );
}

export default CancelDialog;