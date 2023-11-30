
import { useState, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import DefaultConstants from '../../data/Constants';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import { history } from '../../router/BrowserHistory';
import ToolsBar from '../../components/Login/ToolsBar';
import FormHelper from '../../helpers/FormHelper';


const Login = () => {
    const { translate } = useLanguageContext();
    const { handleLogin } = useUserContext();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = FormHelper.GenerateFormData(event);
        handleLogin(formData);
        // eslint-disable-next-line
    }, []);
    

    return (
        <Grid container component='form' onSubmit={e => handleSubmit(e)} className='container-login'>
            <Grid item lg={4} md={6} sm={8} xs={12} className='grid-login'>
                <ToolsBar />
                
                <Grid item className='grid-logo'>
                    <img src={DefaultConstants.system.logoHorizontal} alt={DefaultConstants.system.name} className='image-icon' />
                </Grid>

                <Grid item xs={12} className='grid-fields'>
                    <Grid item xs={12}>
                        <TextField 
                            type='email'
                            label={translate('email')}
                            name='email' 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField 
                            label={translate('password')}
                            name='pass'
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} className='textalign-right'>
                        <Typography component='span' variant='subtitle2' className='text-recover-password' onClick={() => history.push('/forgot-password')}>
                            {translate('forgotPassword')}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} className='grid-buttons'>
                    <Button
                        type='submit'
                        disableElevation={true}
                        fullWidth={true}
                        className='background-primary'
                        label={translate('logon').toUpperCase()}
                    />

                    <Grid item xs={12} className='textalign-center' marginTop={2}>
                        <Typography component='span' variant='subtitle2' className='fontsize-12 cursor-pointer' onClick={() => history.push('/sign-up')}>
                            {translate('newHere')}
                            <Typography component='span' variant='subtitle2' className='fontweight-600 fontsize-12' marginLeft={0.5}> {translate('registerNow')} </Typography>
                        </Typography>

                        <Typography component='h6' variant='subtitle2' className='fontsize-10 text-color-2' marginTop={2}>
                            {translate('copyright')}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default Login;