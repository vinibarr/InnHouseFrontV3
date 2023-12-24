import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import TextField from "../../../../components/TextField";
import { useCallback, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import { useNotificationContext } from "../../../../contexts/NotificationContext";
import ValidationHelper from "../../../../helpers/ValidationHelper";
import { IZipCode } from "../../../../interfaces/IUtils";
import StringHelper from "../../../../helpers/StringHelper";

const Step1_4: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    className
}) => {
    const { translate } = useLanguageContext();
    const { showLoading, hideLoading, showToast } = useNotificationContext();

    const [zipCode, setZipCode] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [neighborhood, setNeighborhood] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [complement, setComplement] = useState<string>('');


    const handleFindZipCode = useCallback(() => {
        if (zipCode.length === 0) {
            return;
        }
        
        showLoading();

        UtilsService.FindZipCode(zipCode).then(resp => {
            const data = resp.data as IZipCode;

            if (data.erro) {
                setZipCode('');
                showToast('warning', translate('zipCodeNotFound'));
            } else {
                setAddress(data.logradouro ?? '');
                setNeighborhood(data.bairro ?? '');
                setCity(data.localidade ?? '');
                setState(data.uf ?? '');
                setComplement(data.complemento ?? '');
            }
        }).catch(err => {
            setZipCode('');
            showToast('warning', translate('zipCodeNotFound'));
        }).finally(() => {
            hideLoading();
        });

        // eslint-disable-next-line
    }, [zipCode]);
    

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('whereIsYourPropertyLocated')}
            </Typography>
        </Grid>

        <Grid item lg={6} xs={12}>
            <Grid container rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
                <Grid item lg={6} md={6} sm={8} xs={12}>
                    <TextField
                        label={translate('zipCode')}
                        type="number"
                        name='cep'
                        required={active}
                        value={zipCode}
                        onChange={(e) => ValidationHelper.MaxLength(StringHelper.OnlyNumbers(e.target.value.trim()), 8, setZipCode)}
                        onBlur={handleFindZipCode}
                        className="scalein-animation"
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        label={translate('address')}
                        name='logradouro'
                        required={active}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item xs={4}>
                    <TextField
                        label={translate('number')}
                        name='numero'
                        required={false}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={4} xs={6}>
                    <TextField
                        label={translate('neighborhood')}
                        name='bairro'
                        required={active}
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={4} xs={6}>
                    <TextField
                        label={translate('city')}
                        name='cidade'
                        required={active}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={4} xs={6}>
                    <TextField
                        label={translate('state')}
                        name='estado'
                        required={active}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={12} xs={6}>
                    <TextField
                        label={translate('complement')}
                        name='complemento'
                        required={false}
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>
            </Grid>
        </Grid>

        <Grid item lg={6} xs={12}>
            mapa
        </Grid>
    </Grid>;
}

export default Step1_4;