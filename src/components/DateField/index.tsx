
import './style.scss';
import { useCallback } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers';
import TextField from '../TextField';
import { Dayjs } from 'dayjs';
import ActionBar from './_ActionBar';


interface IDateFieldProps {
    label: string;
    format: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    value?: Date | string;
    onChange?: (value: Date | undefined) => void;
    disablePast?: boolean;
    disableFuture?: boolean;
}


const DateField: React.FC<IDateFieldProps> = ({
    label,
    format,
    name = '',
    disabled = false,
    required = true,
    onChange = () => {},
    value = '',
    disablePast = false,
    disableFuture = false
}) => {

    const handleChange = useCallback((date: Dayjs | null | undefined) => {
        onChange(date?.toDate());
        // eslint-disable-next-line
    }, []);
    
    return (
        <MobileDatePicker
            label={label}
            inputFormat={format}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            disablePast={disablePast}
            disableFuture={disableFuture}
            renderInput={(params) => {
                return <TextField {...params} 
                    required={required} 
                    name={name} 
                />
            }}
            closeOnSelect={true}
            components={{
                ActionBar: (params) => <ActionBar {...params} showClearButton={!required} />
            }}
        />
    );
}

export default DateField;