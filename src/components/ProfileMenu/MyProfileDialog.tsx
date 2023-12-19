
import { useLanguageContext } from '../../contexts/LanguageContext';
import Dialog, { IDialogProps } from '../Dialog';
import { ActionButton } from '../Button';
import { Grid } from '@mui/material';
import TextField from '../TextField';
import { useUserContext } from '../../contexts/UserContext';
import { useState, useEffect, useCallback, useMemo } from 'react';
import FormHelper from '../../helpers/FormHelper';
import ValidationHelper from '../../helpers/ValidationHelper';
import ImageField from '../ImageField';
import DefaultConstants from '../../data/Constants';
import UserService from '../../services/UserService';
import IUser from '../../interfaces/IUser';


const MyProfileDialog: React.FunctionComponent<Pick<IDialogProps, 'title' | 'open' | 'handleClose'>> = ({ title, open, handleClose }) => {
    const { translate } = useLanguageContext();
    const { user } = useUserContext();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');


    useEffect(() => {
        if (open) {
            setName(user?.name ?? '');
            setEmail(user?.email ?? '');
        }
        
        // eslint-disable-next-line
    }, [open]);


    const dialogActions = useMemo(() => {
        return (
            <>
                <ActionButton
                    action='cancel'
                    onClick={handleClose}
                />

                <ActionButton
                    action='save'
                    type='submit'
                />
            </>
        );
        // eslint-disable-next-line
    }, [translate]);


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = FormHelper.Create(event);
        UserService.UpdateProfile(formData).then(resp => {
            const data = resp.data as IUser;

            if (user) {
                user.name = name;
                user.email = email;
                user.avatar = data.avatar;

                handleClose();
            }
        }).catch(err => {});

        // eslint-disable-next-line
    }, [name, email]);


    return (
        <Dialog 
            open={open}
            handleClose={handleClose}
            showCloseButton={false}
            title={title}
            fullWidth={true}
            dialogActions={dialogActions}
            onSubmit={handleSubmit}
            className='dialogactions-spacebetween overflow-inherit'
        >
            <Grid container className='alignitems-center justifycontent-center'>
                <Grid item md={6} sm={5} xs={8} marginBottom={4} marginTop={-16}>
                    <ImageField
                        name='avatar'
                        validatorName='avatar_alterado'
                        alt={user?.name.toUpperCase()}
                        defaultImage={user?.avatar}
                        height={200}
                        required={false}
                        className='with-border'
                    />
                </Grid>

                <Grid item xs={12}>
                    <Grid container columnSpacing={DefaultConstants.gridColumnSpacing}>
                        <Grid item md={12} sm={6} xs={12}>
                            <TextField
                                type='text'
                                label={translate('name')}
                                name='name'
                                value={name}
                                onChange={e => ValidationHelper.ValidateMaxLength(e.target.value.trim(), 100, setName)}
                            />
                        </Grid>

                        <Grid item md={12} sm={6} xs={12}>
                            <TextField
                                type='email'
                                label={translate('email')}
                                name='email'
                                value={email}
                                onChange={e => ValidationHelper.ValidateMaxLength(e.target.value.trim(), 100, setEmail)}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    );
}

export default MyProfileDialog;