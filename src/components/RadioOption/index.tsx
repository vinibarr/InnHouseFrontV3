
import './style.scss';
import { Grid, Typography } from '@mui/material';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';


interface IRadioOptionProps {
    title: string;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}


const RadioOption: React.FC<IRadioOptionProps> = ({
    title,
    selected = false,
    disabled = false,
    className = '',
    onClick = () => {}
}) => {
    let Icon = RadioButtonUnchecked;

    if (selected) {
        Icon = RadioButtonChecked;
        className = `${className} selected`;
    }

    if (disabled) {
        className = `${className} disabled`;
    }
    

    return (
        <Grid 
            container 
            className={`radiooption-default ${className}`} 
            onClick={() => {
                if (!disabled) {
                    onClick();
                }
            }}
        >
            <Icon className='radiooption-icon' />

            <Grid item className='textalign-right'>
                <Typography variant='subtitle2' className='radiooption-title'> {title} </Typography>
            </Grid>
        </Grid>
    );
}

export default RadioOption;