
import './style.scss';

import { MenuItem, Typography } from '@mui/material';
import { IMuiIcon } from '../../interfaces/IMaterial';


interface INavigationLinkProps {
    name: string;
    selected?: boolean;
    Icon: IMuiIcon | null;
    onClick: () => void;
    className?: string;
}


const NavigationLink: React.FC<INavigationLinkProps> = ({
    name, 
    selected = false,
    Icon, 
    onClick,
    className = ''
}) => {
    return (
        <MenuItem className={`navigationlink-container ${selected ? 'selected' : ''} ${className}`} onClick={onClick}>
            {Icon !== null && <Icon className='navigationlink-icon' />}
            <Typography component='span' variant='subtitle2' className='navigationlink-name'> {name} </Typography>
        </MenuItem>
    );
}


export default NavigationLink;