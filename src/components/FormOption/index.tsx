
import './style.scss';
import { Box, Typography } from '@mui/material';


interface IFormOptionProps {
    title: string;
    name: string;
    value: any;
    selected?: boolean;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    image: string;
    onClick?: () => void;
    type: 'radio' | 'checkbox';
}


const FormOption: React.FC<IFormOptionProps> = ({
    title,
    name,
    value,
    selected = false,
    disabled = false,
    required = false,
    className = '',
    image,
    onClick = () => {},
    type
}) => {
    if (selected) {
        className = `${className} active`;
    }

    if (disabled) {
        className = `${className} disabled`;
    }
    

    return (
        <Box 
            className={`formoption-default ${className}`} 
            onClick={() => {
                if (!disabled) {
                    onClick();
                }
            }}
        >
            <img src={image} alt={image} className='formoption-image' />
            <Typography className='formoption-title'>{title}</Typography>
            <input type={type} name={name} className='formoption-input' value={value} checked={selected} required={required} />
        </Box>
    );
}

export default FormOption;