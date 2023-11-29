
import './style.scss';
import { useState, useCallback } from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import DefaultConstants from '../../data/Constants';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import { useUserContext } from '../../contexts/UserContext';
import { useNotificationContext } from '../../contexts/NotificationContext';
import AuthService from '../../services/AuthService';
import Languages from '../../data/Languages';


const Login = () => {
    const { language, translate, handleChangeLanguage } = useLanguageContext();
    const { showToast } = useNotificationContext();
    const { handleLogin } = useUserContext();

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('realizar login')

        // const formData = FormHelper.GenerateFormData(event);
        // handleLogin(formData);
        // eslint-disable-next-line
    }, []);
    

    return (
        <>
            <Grid container component='form' onSubmit={e => handleSubmit(e)} className='container-login'>
                <Grid item lg={4} md={6} sm={8} xs={12} className='grid-login'>
                    <Grid item className='grid-languages'>
                        {
                            Languages.map(l => {
                                return <Avatar
                                    src={l.icon}
                                    alt={l.initials}
                                    key={l.value}
                                    className={`avatar-language ${l.value === language.value ? 'active' : ''}`}
                                    onClick={() => handleChangeLanguage(l.value)}
                                />;
                            })
                        }
                    </Grid>
                    
                    <Grid item className='grid-logo'>
                        <img src={DefaultConstants.system.logoHorizontal} alt={DefaultConstants.system.name} className='image-icon' />
                    </Grid>

                    <Grid item xs={12} className='grid-fields'>
                        <Grid item xs={12}>
                            <TextField 
                                label={translate('user')}
                                name='login' 
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                label={translate('password')}
                                name='password'
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} className='textalign-right'>
                            <Typography component='span' variant='subtitle2' className='text-recover-password' onClick={() => alert('abrir tela recuperação senha')}>
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
                            <Typography component='span' variant='subtitle2' className='fontsize-12 cursor-pointer' onClick={() => alert('abrir tela cadastro')}>
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
        </>
    );
}


export default Login;