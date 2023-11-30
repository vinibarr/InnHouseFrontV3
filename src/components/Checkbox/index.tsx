
import './style.scss';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';


interface ICheckboxProps {
    label: string;
    name?: string;
    checked: boolean;
    value?: string | number | boolean;
    defaultChecked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    size?: 'medium' | 'small';
    className?: string;
}


const Checkbox: React.FC<ICheckboxProps> = ({
    label,
    name = '',
    checked,
    value = true,
    defaultChecked = false,
    indeterminate = false,
    disabled = false,
    onChange = () => {},
    size = 'medium',
    className = ''
}) => {
    return (
        <FormControlLabel
            control={
                <MuiCheckbox 
                    name={name}
                    checked={checked}
                    value={value}
                    defaultChecked={defaultChecked}
                    indeterminate={indeterminate}
                    disabled={disabled}
                    onChange={onChange}
                    size={size}
                    className={`checkbox-default ${className}`}
                />
            }
            label={label}
        />
    );
}

export default Checkbox;