
import './style.scss';
import { Check, Close, FilterAlt } from '@mui/icons-material';
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
    action: 'close' | 'save' | 'cancel' | 'yes' | 'no' | 'apply' | 'view';
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
            className={`small background-blue ${className}`}
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
            className={`small background-red ${className}`}
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

    if (action === 'apply') {
        return <Button
            label={translate('apply')}
            className={`small background-blue ${className}`}
            size='medium'
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <FilterAlt />}
            onClick={onClick}
        />;
    }

    if (action === 'view') {
        return <Button
            label={translate('view')}
            className={`small background-blue ${className}`}
            size='medium'
            fullWidth={fullWidth}
            disabled={disabled}
            type={type}
            startIcon={startIcon ?? <Check />}
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