
import './style.scss';
import { useCallback } from 'react';
import { Box, Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import { Close } from '@mui/icons-material';



export interface IDefaultDialogProps {
    open: boolean;
    handleClose: () => void;
}



export interface IAddEditDialogProps<Type> extends IDefaultDialogProps {
    data: Type | undefined;
    handleListRefresh?: () => void;
}

export interface IRemoveDialogProps<Type> extends IAddEditDialogProps<Type> { }

export interface IDialogProps extends IDefaultDialogProps {
    showCloseButton?: boolean;
    onCloseEventEnabled?: boolean;
    title: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    headerActions?: JSX.Element | JSX.Element[] | null;
    dialogActions?: JSX.Element | JSX.Element[] | null;
    className?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    [rest: string]: any;
}


const Dialog: React.FunctionComponent<IDialogProps> = ({
    open,
    handleClose,
    showCloseButton = true,
    onCloseEventEnabled = false,
    title,
    fullWidth = false,
    fullHeight = false,
    maxWidth = 'xs',
    headerActions = null,
    dialogActions = null,
    className = '',
    onSubmit = () => {},
    ...rest
}) => {
    
    const constructDialogActions = useCallback(() => {
        if (dialogActions) {
            return (
                <DialogActions className='dialogactions-default'>
                    {dialogActions}
                </DialogActions>
            );
        }

        return null;
        // eslint-disable-next-line
    }, [dialogActions]);


    return (
        <MuiDialog
            open={open}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            onClose={onCloseEventEnabled ? handleClose : undefined}
            PaperProps={{
                className: `dialog-default ${className} ${fullHeight ? 'full-height' : ''}`
            }}
        >
            <Box component='form' onSubmit={onSubmit} className='dialogform-default'>
                <DialogTitle className='dialogtitle-default'>
                    <Grid container className='alignitems-center'>
                        <Grid item>
                            <Typography variant='subtitle1' className='dialogtitle-text'>{title}</Typography>
                        </Grid>

                        <Grid item flexGrow={2} className='display-flex justifycontent-flexend'>
                            {headerActions}
                            
                            {
                                showCloseButton && <Box>
                                    <IconButton size='small' onClick={handleClose}>
                                        <Close fontSize='inherit' />
                                    </IconButton>
                                </Box>
                            }
                        </Grid>
                    </Grid>
                </DialogTitle>
                
                <DialogContent className='dialogcontent-default' dividers={fullHeight}>
                    {rest.children}
                </DialogContent>
                
                {
                    constructDialogActions()
                }
            </Box>
        </MuiDialog>
    );
}

export default Dialog;






export interface IDialogSectionTitleProps {
    title: string;
}


export const DialogSectionTitle: React.FunctionComponent<IDialogSectionTitleProps> = ({
    title
}) => {
    return (
        <Box marginBottom={2}>
            <Typography variant="subtitle1" component='span' className='dialog-sectiontitle'>
                {title}
            </Typography>
        </Box>
    );
}
