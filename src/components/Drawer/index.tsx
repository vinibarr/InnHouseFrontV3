
import './style.scss';
import { Close } from '@mui/icons-material';
import { Box, Drawer as MuiDrawer, IconButton, Typography } from '@mui/material';



export interface IDefaultDrawerProps {
    open: boolean;
    handleClose: () => void;
}


export interface IDrawerProps extends IDefaultDrawerProps {
    anchor: "right" | "left" | "top" | "bottom";
    title: string;
    children: JSX.Element | JSX.Element[];
    footer?: JSX.Element | JSX.Element[];
    className?: string;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}


const Drawer: React.FC<IDrawerProps> = ({
    open,
    handleClose,
    anchor,
    title,
    children,
    footer = undefined,
    className = '',
    onSubmit = undefined
}) => {
    if (!footer) {
        className = `${className} without-footer`;
    }

    return (
        <MuiDrawer
            anchor={anchor}
            open={open}
            onClose={handleClose}
            PaperProps={{
                className: `drawer-default ${className}`
            }}
        >
            <Box component='form' onSubmit={onSubmit} className={`drawerform-default ${className}`}>
                <Box className='box-header'>
                    <Typography variant='subtitle1' className='text-title'> {title} </Typography>

                    <IconButton size='small' onClick={handleClose}>
                        <Close fontSize='inherit' />
                    </IconButton>
                </Box>

                <Box className='box-content'>
                    {children}
                </Box>

                {
                    footer && <Box className='box-footer'>
                        {footer}
                    </Box>
                }
            </Box>
        </MuiDrawer>
    );
}

export default Drawer;