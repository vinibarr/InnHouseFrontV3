import './style.scss';
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import ContentTitle from "../../../../components/Content/ContentTitle";
import { history } from "../../../../router/History";
import { ArrowBack, Image } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { IProperty } from "../../../../interfaces/IProperty";
import FormHelper from "../../../../helpers/FormHelper";
import PropertyService from "../../../../services/PropertyService";
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import DefaultConstants from '../../../../data/Constants';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';


const ViewProperty = (props: any) => {
    const { translate } = useLanguageContext();

    const { isLoaded } = useJsApiLoader({
        id: DefaultConstants.googleMaps.id,
        googleMapsApiKey: DefaultConstants.googleMaps.apiKey
    });

    const [property, setProperty] = useState<IProperty | undefined>(undefined);

    useEffect(() => {
        const propertyId = props.match.params.id ?? undefined;
        if (propertyId === undefined) {
            history.goBack();
        }

        let formData = FormHelper.Create(undefined);
        formData = FormHelper.Add(formData, 'id_property', propertyId);

        PropertyService.List(formData).then(resp => {
            const properties = resp.data as IProperty[];
            setProperty(properties[0]);
        }).catch(err => { })

        // eslint-disable-next-line
    }, []);

    if (property === undefined) {
        return <> </>;
    }

    const coordenadas = {
        lat: +(property.latitude?.toString() ?? '0'),
        lng: +(property.longitude?.toString() ?? '0')
    };

    return <>
        <Grid item xs={12} className='grid-header'>
            <IconButton onClick={() => history.goBack()} className='color-primary'>
                <ArrowBack />
            </IconButton>

            <Grid item className='grid-title'>
                <ContentTitle 
                    name={property.descricao}
                    applyTranslation={false}
                />
            </Grid>
        </Grid>

        <Grid container className='grid-content overflow-enabled justifycontent-center padding-none property-container'>
            <Grid item xs={12} 
                className='property-container-header' 
                sx={{ 
                    backgroundImage: `url(${property.fotos[0] ? property.fotos[0].nome_servidor : ''})` 
                }}
            >
                <Typography className='property-container-header-title'>
                    {property.descricao}
                </Typography>
                
                <Typography className='property-container-header-photos'>
                    <Image />
                    {property.fotos.length}
                </Typography>
            </Grid>

            <Grid item sm={11.6} xs={11.2} className='property-container-content'>
                <Grid container rowSpacing={DefaultConstants.gridRowSpacing}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1'>{property.descricao}</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container className='property-container-content-amenities'>
                            {
                                property.comodidades.map(c => {
                                    return <Grid item className='property-container-content-amenities-item' key={c.id}>
                                        <img src={c.caminho_imagem} alt={c.descr} className='property-container-content-amenities-item-image' />
                                        <Typography className='property-container-content-amenities-item-title'>{c.descr}</Typography>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant='subtitle2' className='property-container-content-informations'>
                                    {property.pessoas} {translate('guests').toLowerCase()}
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='subtitle2' className='property-container-content-informations'>
                                    {property.quartos} {translate('bedrooms').toLowerCase()}
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='subtitle2' className='property-container-content-informations'>
                                    {property.camas} {translate('beds').toLowerCase()}
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='subtitle2' className='property-container-content-informations'>
                                    {property.banheiros} {translate('bathrooms').toLowerCase()}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='caption' className='textoverflow-ellipsis overflow-hidden whitespace-nowrap display-block'>
                            {property.logradouro}, {' '}
                            {property.numero ? `${property.numero.toString()}, ` : ''}
                            {property.bairro?.toString()}, {' '}
                            {property.cidade?.toString()} - {' '}
                            {property.uf?.toString()}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider />
                    </Grid>

                    <Grid item xs={12}>
                        {
                            isLoaded && <GoogleMap
                                mapContainerStyle={{
                                    height: '100%',
                                    minHeight: '300px',
                                    width: '100%'
                                }}
                                center={coordenadas}
                                zoom={18}
                                options={{
                                    fullscreenControl: false,
                                    streetViewControl: false
                                }}
                            >
                                <Marker position={coordenadas} />
                            </GoogleMap>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>;
}

export default ViewProperty;