
import { useState, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import AuthService from '../../services/AuthService';
import ToolsBar from '../../components/Login/ToolsBar';
import FormHelper from '../../helpers/FormHelper';
import { history } from '../../router/BrowserHistory';
import { useLocation } from 'react-router-dom';
import TextField from '../../components/TextField';


const ResetPassword = () => {
    const { translate } = useLanguageContext();
    const { search } = useLocation();

    const [password, setPassword] = useState<string>('');


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const queryParams = new URLSearchParams(search);

        let formData = FormHelper.Create(event);
        formData = FormHelper.Add(formData, 'hash', queryParams.get('recovery') ?? 'invalid');
        
        AuthService.ResetPassword(formData).then(resp => {
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
                                {translate('resetPassword')}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} marginBottom={6}>
                            {translate('_loginScreenResetPasswordDescription')}
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField 
                                type='password'
                                label={translate('password')}
                                name='pass' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className='grid-buttons'>
                        <Button
                            type='submit'
                            disableElevation={true}
                            fullWidth={true}
                            className='background-primary'
                            label={translate('save').toUpperCase()}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default ResetPassword;