
import './style.scss';
import { IconButton, InputProps, TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { HTMLInputTypeAttribute, useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const TextField: React.FC<TextFieldProps> = (props) => {
    const [type, setType] = useState<HTMLInputTypeAttribute | undefined>(props.type);
    const InputPropsAux = { ...props.InputProps } as InputProps;

    if (props.type === 'password') {
        InputPropsAux.endAdornment = (
            <IconButton size="small" onClick={() => setType(type === 'password' ? 'text' : 'password')}>
                {type === 'password' ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
            </IconButton>
        );
    }


    return (
        <MuiTextField
            {...props}
            type={type}
            variant={props.variant ?? 'standard'}
            color={props.color ?? 'primary'}
            fullWidth={true}
            margin={props.margin ?? 'normal'}
            required={props.required ?? true}
            autoComplete={'off'}
            InputProps={InputPropsAux}
            className={`textfield-default ${props.className}`}
        />
    );
}

export default TextField;