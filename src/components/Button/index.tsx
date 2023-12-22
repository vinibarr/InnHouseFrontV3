
import './style.scss';
import { ArrowBack, ArrowForward, Check, Close } from '@mui/icons-material';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { Button as MuiButton, Typography } from '@mui/material';


interface IButtonProps {
    label: string;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'outlined' | 'text' | 'contained';
    disabled?: boolean;
    disableElevation?: boolean;
    fullWidth?: boolean;
    size?: 'large' | 'medium' | 'small';
    color?: 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
    className?: string;
    startIcon?: JSX.Element;
    onClick?: () => void;
}


const Button: React.FC<IButtonProps> = ({
    label,
    type = 'button',
    variant = 'contained',
    disabled = false,
    disableElevation = true,
    fullWidth = true,
    size = 'large',
    color = 'inherit',
    className = '',
    startIcon = undefined,
    onClick = () => {}
}) => {
    return (
        <MuiButton
            type={type}
            variant={variant}
            disabled={disabled}
            disableElevation={disableElevation}
            fullWidth={fullWidth}
            size={size}
            color={color}
            className={`button-default ${className}`}
            onClick={onClick}
            startIcon={startIcon}
        >
            <Typography variant='body1'>{label}</Typography>
        </MuiButton>
    );
}

export default Button;



interface IActionButtonProps {
    action: 'close' | 'save' | 'cancel' | 'yes' | 'no' | 'next' | 'back' | 'start';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
    startIcon?: JSX.Element;
    onClick?: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({
    action,
    type = 'button',
    disabled = false,
    fullWidth = false,
    className = '',
    startIcon = undefined,
    onClick = () => {}
}) => {
    const { translate } = useLanguageContext();

    if (action === 'save') {
        return <Button
            label={translate('save')}
            className={`small background-secondary ${className}`}
            size='medium'
            fullWidth={false}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <Check />}
            onClick={onClick}
        />;
    }

    if (action === 'cancel') {
        return <Button
            label={translate('cancel')}
            className={`small ${className}`}
            size='medium'
            fullWidth={false}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <Close />}
            onClick={onClick}
        />;
    }

    if (action === 'yes') {
        return <Button
            label={translate('yes')}
            className={`small background-primary ${className}`}
            size='medium'
            fullWidth={false}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <Check />}
            onClick={onClick}
        />;
    }

    if (action === 'no') {
        return <Button
            label={translate('no')}
            className={`small ${className}`}
            size='medium'
            fullWidth={false}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <Close />}
            onClick={onClick}
        />;
    }

    if (action === 'next') {
        return <Button
            label={translate('next')}
            className={`small background-primary ${className}`}
            size='medium'
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <ArrowForward />}
            onClick={onClick}
        />;
    }

    if (action === 'start') {
        return <Button
            label={translate('start')}
            className={`small background-primary ${className}`}
            size='medium'
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <ArrowForward />}
            onClick={onClick}
        />;
    }

    if (action === 'back') {
        return <Button
            label={translate('back')}
            className={`small ${className}`}
            size='medium'
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <ArrowBack />}
            onClick={onClick}
        />;
    }

    return <Button
        label={translate('close')}
        className={`small ${className}`}
        size='medium'
        fullWidth={false}
        disabled={disabled}
        type={type}
        startIcon={startIcon ?? <Close />}
        onClick={onClick}
    />;
}

export {
    ActionButton
};