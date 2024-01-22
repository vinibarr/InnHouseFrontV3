
import './style.scss';
import { useCallback } from 'react';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText, Box, Typography } from '@mui/material';
import { SelectChangeEvent } from "@mui/material";


interface ISelectFieldProps {
    label?: string;
    name: string;
    data: any[];
    customData?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    margin?: 'dense' | 'none' | 'normal';
    disabled?: boolean;
    helperText?: string | undefined;
    required?: boolean;
    variant?: 'filled' | 'outlined' | 'standard';
    value?: any;
    multiple?: boolean;
    className?: string;
    onChange: (event: SelectChangeEvent<any>) => void;
    type?: 'default' | 'personalized1' 
}


const SelectField: React.FC<ISelectFieldProps> = ({
    label = undefined,
    name,
    data,
    customData = false,
    color = "primary",
    margin = "normal",
    disabled = false,
    helperText = undefined,
    required = true,
    variant = 'standard',
    value = '',
    multiple = false,
    className = '',
    onChange,
    type = 'default'
}) => {
    const constructSelectOptions = useCallback(() => {
        if (customData) {
            return data;
        }

        return data?.map((item, index) => {
            const value = item.value ?? item;
            const text = item.text ?? item;
            const disabled = item.disabled ?? false;

            return (
                <MenuItem value={value} key={index} disabled={disabled}>
                    {text}
                </MenuItem>
            );
        });
        // eslint-disable-next-line
    }, [data]);


    const constructSelectContainer = (label?: string) => {
        return (
            <FormControl variant={variant} fullWidth={true} color={color} margin={margin} className={`selectfield-default ${className}`}>
                {
                    label && <InputLabel>{label}</InputLabel>
                }
                
                <Select
                    label={label}
                    name={name}
                    value={value}
                    disabled={disabled}
                    required={required}
                    multiple={multiple}
                    onChange={onChange}
                >
                    {
                        constructSelectOptions()
                    }
                </Select>

                {
                    helperText && <FormHelperText> {helperText} </FormHelperText>
                }
            </FormControl>
        );
    };

    if (type === 'default') {
        return constructSelectContainer(label);
    }


    return <Box className='selectbox-default'>
        <Typography className="selectbox-title"> {label} </Typography>

        <Box className='selectbox-input'>
            {constructSelectContainer(undefined)}
        </Box>
    </Box>;
}

export default SelectField;