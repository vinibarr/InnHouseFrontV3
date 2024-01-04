import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import TextField from "../../../../components/TextField";
import { useCallback, useEffect, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import { useNotificationContext } from "../../../../contexts/NotificationContext";
import ValidationHelper from "../../../../helpers/ValidationHelper";
import { ICoordinates, IZipCode } from "../../../../interfaces/IUtils";
import StringHelper from "../../../../helpers/StringHelper";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Step1_4: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    googleMapsApiLoaded,
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

    const [coordinates, setCoordinates] = useState<ICoordinates | undefined>(undefined);


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


    useEffect(() => {
        if (googleMapsApiLoaded && active) {
            const geocoder = new window.google.maps.Geocoder();

            geocoder.geocode({
                address: `${address}, ${number}, ${city}, ${state}` 
            }, function (results, status) {
                if (status.toUpperCase() === 'OK') {
                    setCoordinates(results !== null ? {
                        lat: results[0].geometry.location.lat() ?? 0, 
                        lng: results[0].geometry.location.lng() ?? 0
                    } : undefined);
                } else {
                    setCoordinates(undefined);
                }
            });
        }
    }, [googleMapsApiLoaded, address, number, city, state, active]);
    

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('whereIsYourPropertyLocated')}
            </Typography>
        </Grid>

        <Grid item xs={12}>
            <Grid container rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
                <Grid item lg={2} md={3} sm={8} xs={12}>
                    <TextField
                        label={translate('zipCode')}
                        type="number"
                        name='cep'
                        variant="outlined"
                        required={active}
                        value={zipCode}
                        onChange={(e) => ValidationHelper.MaxLength(StringHelper.OnlyNumbers(e.target.value.trim()), 8, setZipCode)}
                        onBlur={handleFindZipCode}
                        className="scalein-animation"
                    />
                </Grid>

                <Grid item lg={6} md={6} sm={8} xs={8}>
                    <TextField
                        label={translate('address')}
                        name='logradouro'
                        variant="outlined"
                        required={active}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={4} md={3} sm={4} xs={4}>
                    <TextField
                        label={translate('number')}
                        name='numero'
                        variant="outlined"
                        required={false}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={3} xs={6}>
                    <TextField
                        label={translate('neighborhood')}
                        name='bairro'
                        variant="outlined"
                        required={active}
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={3} xs={6}>
                    <TextField
                        label={translate('city')}
                        name='cidade'
                        variant="outlined"
                        required={active}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={3} xs={6}>
                    <TextField
                        label={translate('state')}
                        name='estado'
                        variant="outlined"
                        required={active}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>

                <Grid item lg={3} xs={6}>
                    <TextField
                        label={translate('complement')}
                        name='complemento'
                        variant="outlined"
                        required={false}
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        className='scalein-animation'
                    />
                </Grid>
            </Grid>
        </Grid>

        <Grid item xs={12}>
            {
                googleMapsApiLoaded && coordinates && <GoogleMap
                    mapContainerStyle={{
                        height: '100%',
                        minHeight: '300px',
                        width: '100%'
                    }}
                    center={coordinates}
                    zoom={18}
                    options={{
                        fullscreenControl: false,
                        streetViewControl: false
                    }}
                >
                    <Marker position={coordinates} />
                </GoogleMap>
            }
        </Grid>
    </Grid>;
}

export default Step1_4;