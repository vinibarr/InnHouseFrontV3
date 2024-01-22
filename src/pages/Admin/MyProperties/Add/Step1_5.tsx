import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { ICoordinates } from "../../../../interfaces/IUtils";
import TextField from "../../../../components/TextField";

const Step1_5: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    formData,
    googleMapsApiLoaded,
    className
}) => {
    const { translate } = useLanguageContext();

    const [oldCoordinates, setOldCoordinates] = useState<ICoordinates | undefined>(undefined);
    const [coordinates, setCoordinates] = useState<ICoordinates | undefined>(undefined);
    

    useEffect(() => {
        if (googleMapsApiLoaded && active) {
            const geocoder = new window.google.maps.Geocoder();
            const address = formData.get('logradouro');
            const number = formData.get('numero');
            const city = formData.get('cidade');
            const state = formData.get('estado');

            geocoder.geocode({
                address: `${address}, ${number}, ${city}, ${state}` 
            }, function (results, status) {
                if (status.toUpperCase() === 'OK') {
                    const coords = results !== null ? {
                        lat: results[0].geometry.location.lat() ?? 0, 
                        lng: results[0].geometry.location.lng() ?? 0
                    } : undefined;

                    setOldCoordinates(coords);
                    setCoordinates(coords);
                } else {
                    setOldCoordinates(undefined);
                    setCoordinates(undefined);
                }
            });
        }
    }, [googleMapsApiLoaded, active, formData]);


    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('isTheMapCorrect')}
            </Typography>
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={6} className='display-none'>
            <TextField
                type="text"
                name='latitude'
                variant="outlined"
                required={false}
                value={coordinates?.lat}
                className="scalein-animation"
            />
        </Grid>

        <Grid item lg={2} md={4} sm={6} xs={6} className='display-none'>
            <TextField
                type="text"
                name='longitude'
                variant="outlined"
                required={false}
                value={coordinates?.lng}
                className="scalein-animation"
            />
        </Grid>

        <Grid item xs={12}>
            {
                googleMapsApiLoaded && oldCoordinates && coordinates && <GoogleMap
                    mapContainerStyle={{
                        height: '100%',
                        minHeight: '500px',
                        width: '100%'
                    }}
                    center={oldCoordinates}
                    zoom={18}
                    options={{
                        fullscreenControl: false,
                        streetViewControl: false,
                        disableDoubleClickZoom: true
                    }}
                    onDblClick={(e) => {
                        const coords = e.latLng ? {
                            lat: e.latLng?.lat(),
                            lng: e.latLng?.lng(),
                        } : undefined;
                        setCoordinates(coords);
                    }}
                >
                    {
                        <Marker position={coordinates} options={{
                            draggable: true
                        }} onDrag={(e) => {
                            const coords = e.latLng ? {
                                lat: e.latLng?.lat(),
                                lng: e.latLng?.lng(),
                            } : undefined;
                            setCoordinates(coords)
                        }} />
                    }
                </GoogleMap>
            }
        </Grid>
    </Grid>;
}

export default Step1_5;