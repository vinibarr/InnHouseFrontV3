
import './style.scss';
import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';


interface ISwitchProps {
    label: string;
    name: string;
    checked: boolean;
    value?: string | number | boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    variant?: 'default' | 'theme';
    labelPlacement?: 'bottom' | 'end' | 'start' | 'top';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}


const Switch: React.FC<ISwitchProps> = ({
    label,
    name,
    checked,
    value = true,
    defaultChecked = false,
    disabled = false,
    variant = 'default',
    labelPlacement = 'end',
    onChange = () => {},
    className = ''
}) => {
    return (
        <FormControlLabel
            control={
                <MuiSwitch 
                    name={name}
                    checked={checked}
                    value={value}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    onChange={onChange}
                    size='medium'
                    className={`switch-default variant-${variant} ${className}`}
                />
            }
            label={label}
            labelPlacement={labelPlacement}
        />
    );
}

export default Switch;