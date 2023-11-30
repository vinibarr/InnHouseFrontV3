
import { useState, useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import AuthService from '../../services/AuthService';
import ToolsBar from '../../components/Login/ToolsBar';
import FormHelper from '../../helpers/FormHelper';
import { history } from '../../router/BrowserHistory';
import TermsAndConditionsDialog from './TermsAndConditionsDialog';
import RadioButtonGroup from '../../components/RadioButtonGroup';
import { AccessProfileData, AccessProfileEnum } from '../../data/Enums';


const SignUp = () => {
    const { translate } = useLanguageContext();

    const [accessProfile, setAccessProfile] = useState<number>(100);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [termsAndConditionsOpen, setTermsAndConditionsOpen] = useState<boolean>(false);


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        let formData = FormHelper.GenerateFormData(event);
        formData = FormHelper.IncludeKeyValueOnFormData(formData, 'type', accessProfile);
        
        AuthService.SignUp(formData).then(resp => {
            history.push('/');
        }).catch(err => {});

        // eslint-disable-next-line
    }, [accessProfile]);
    

    return (
        <>
            <Grid container component='form' onSubmit={e => handleSubmit(e)} className='container-login'>
                <Grid item lg={4} md={6} sm={8} xs={12} className='grid-login'>
                    <ToolsBar backTo='/' />
                    
                    <Grid item xs={12} className='grid-fields'>
                        <Grid item xs={12} marginBottom={2}>
                            <Typography component='h5' variant='h5' className='color-primary'>
                                {translate('registerNow')}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <RadioButtonGroup
                                data={[AccessProfileEnum.Owner, AccessProfileEnum.Broker, AccessProfileEnum.Guest].map(a => {
                                    const accessProfile = AccessProfileData[a];

                                    return {
                                        value: accessProfile.id,
                                        title: translate(accessProfile.name)
                                    };
                                })}
                                handleChange={(value) => setAccessProfile(value)}
                                selected={accessProfile}
                            />
                        </Grid>
                        
                        <Grid item xs={12} marginTop={2}>
                            <TextField 
                                label={translate('name')}
                                name='name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
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

                        <Grid item xs={12}>
                            <TextField 
                                type='password'
                                label={translate('password')}
                                name='pass' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} marginTop={4}>
                            <Typography component='span' variant='body2' className='fontsize-12'>
                                {
                                    translate('_loginScreenSignUpTermsAndConditionsDescription').split('{termsAndConditions}').map((t, index) => {
                                        if (index === 0) {
                                            return <>
                                                {t}
                                                <Typography 
                                                    component='span' 
                                                    variant='body2' 
                                                    className='fontsize-12 cursor-pointer fontweight-bold' 
                                                    onClick={() => setTermsAndConditionsOpen(true)}
                                                >
                                                    {translate('termsAndConditions')}
                                                </Typography>
                                            </>;
                                        }

                                        return t;
                                    })
                                }
                            </Typography>
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

            <TermsAndConditionsDialog
                open={termsAndConditionsOpen}
                handleClose={() => setTermsAndConditionsOpen(false)}
            />
        </>
    );
}


export default SignUp;