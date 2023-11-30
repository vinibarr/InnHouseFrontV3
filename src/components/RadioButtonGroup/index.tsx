
import './style.scss';
import { Grid, Typography } from '@mui/material';


interface IRadioButtonGroupProps {
    title?: string;
    data: any[];
    selected?: any;
    className?: string;
    handleChange?: (row: any) => void;
}


const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = ({
    title = undefined,
    data,
    selected = undefined,
    handleChange = () => {}
}) => {
    return (
        <Grid container className='radiobuttongroup-default'>
            {
                title && <Grid item xs={12}>
                    <Typography variant='subtitle2' className='radiobuttongroup-title'> {title} </Typography>
                </Grid>
            }

            {
                data.map((row, index) => {
                    let className = index === 0 ? 'first-child' : '';
                    if (row.value === selected) {
                        className += ' active ';
                    }

                    return <Grid 
                        item 
                        key={index}
                        className={`radiobuttongroup-item ${className}`} 
                        onClick={() => {
                            if (!row.disabled) {
                                handleChange(row.value);
                            }
                        }}
                    >
                        <Typography variant='subtitle2' className='radiobuttongroup-item-title'> {row.title} </Typography>
                    </Grid>
                })
            }
        </Grid>
    );
}

export default RadioButtonGroup;