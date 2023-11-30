
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Button from '../../components/Button';
import { useLanguageContext } from '../../contexts/LanguageContext';
import AuthService from '../../services/AuthService';
import ToolsBar from '../../components/Login/ToolsBar';
import FormHelper from '../../helpers/FormHelper';
import { history } from '../../router/BrowserHistory';
import { Error, Pending, TaskAlt } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';


interface IEmailConfirmationStatus {
    icon: JSX.Element;
    text?: string;
}


const SignUpEmailConfirmation = () => {
    const { translate } = useLanguageContext();
    const { search } = useLocation();

    const [status, setStatus] = useState<IEmailConfirmationStatus>({
        icon: <Pending className='color-secondary fontsize-80' />,
        text: undefined
    });

    useEffect(() => {
        const queryParams = new URLSearchParams(search);

        let formData = FormHelper.GenerateFormData(undefined);
        formData = FormHelper.IncludeKeyValueOnFormData(formData, 'hash', queryParams.get('hash') ?? 'invalid');

        AuthService.SignUpEmailConfirmation(formData)
            .then(resp => {
                setStatus({
                    icon: <TaskAlt className='color-green fontsize-80' />,
                    text: '_loginScreenSignUpEmailConfirmationSuccessDescription'
                });
            })
            .catch(err => {
                setStatus({
                    icon: <Error className='color-red fontsize-80' />,
                    text: '_loginScreenSignUpEmailConfirmationErrorDescription'
                });
            });
    }, [search]);

    return (
        <>
            <Grid container className='container-login'>
                <Grid item lg={4} md={6} sm={8} xs={12} className='grid-login'>
                    <ToolsBar backTo='/' />
                    
                    <Grid item xs={12} className='grid-fields textalign-center'>
                        <Grid item xs={12} marginBottom={2}>
                            {status.icon}
                        </Grid>

                        <Grid item xs={12} marginBottom={2}>
                            {status.text && translate(status.text)}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className='grid-buttons'>
                        <Button
                            type='button'
                            disableElevation={true}
                            fullWidth={true}
                            className='background-secondary'
                            label={translate('returnToLogin').toUpperCase()}
                            onClick={() => history.push('/')}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default SignUpEmailConfirmation;