
import { useState, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import AuthService from '../../services/AuthService';
import ToolsBar from '../../components/Login/ToolsBar';
import FormHelper from '../../helpers/FormHelper';
import { history } from '../../router/BrowserHistory';


const ForgotPassword = () => {
    const { translate } = useLanguageContext();

    const [email, setEmail] = useState<string>('');


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = FormHelper.GenerateFormData(event);
        
        AuthService.ForgotPassword(formData).then(resp => {
            history.push('/');
        }).catch(err => {});

        // eslint-disable-next-line
    }, []);
    

    return (
        <>
            <Grid container component='form' onSubmit={e => handleSubmit(e)} className='container-login'>
                <Grid item lg={4} md={6} sm={8} xs={12} className='grid-login'>
                    <ToolsBar backTo='/' />
                    
                    <Grid item xs={12} className='grid-fields'>
                        <Grid item xs={12} marginBottom={4}>
                            <Typography component='h5' variant='h5' className='color-primary'>
                                {translate('forgotPassword')}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} marginBottom={6}>
                            {translate('_loginScreenForgotPasswordDescription')}
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField 
                                type='email'
                                label={translate('email')}
                                name='email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className='grid-buttons'>
                        <Button
                            type='submit'
                            disableElevation={true}
                            fullWidth={true}
                            className='background-primary'
                            label={translate('toSend').toUpperCase()}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default ForgotPassword;