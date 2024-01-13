import { Divider, Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyAmenity } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import { Image } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import FormHelper from "../../../../helpers/FormHelper";
import PropertyService from "../../../../services/PropertyService";
import { GoogleMap, Marker } from "@react-google-maps/api";

const Step2_6: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    formData,
    googleMapsApiLoaded,
    className
}) => {
    const { translate } = useLanguageContext();

    const [amenities, setAmenities] = useState<IPropertyAmenity[]>([]);


    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        PropertyService.ListOfAmenities(formData).then(resp => {
            setAmenities(resp.data as IPropertyAmenity[]);
        }).catch(err => {});
    }, []);


    const data = useMemo(() => {
        const fromEntries = Object.fromEntries(formData);
        const entries = Object.entries(fromEntries);

        return {
            imagens: entries.filter(([key, value]) => key.includes('foto')).map(([key, value]) => value as File),
            titulo: fromEntries.titulo?.toString(),
            descricao: fromEntries.descricao?.toString(),
            hospedes: fromEntries.hospedes?.toString(),
            quartos: fromEntries.quartos?.toString(),
            camas: fromEntries.camas?.toString(),
            banheiros: fromEntries.banheiros?.toString(),
            comodidades: entries.map(([key, value]) => key.includes('comodidade') ? value.toString() : '0'),
            endereco: `${fromEntries.logradouro?.toString()}, ${fromEntries.numero ? `${fromEntries.numero.toString()}, ` : ''}${fromEntries.bairro?.toString()}, ${fromEntries.cidade?.toString()} - ${fromEntries.estado?.toString()}`,
            coordenadas: {
                lat: +(fromEntries.latitude?.toString() ?? '0'),
                lng: +(fromEntries.longitude?.toString() ?? '0')
            }
        };
    }, [formData]);

    return <Grid container className={`preview-container ${className} justifycontent-center`}>
        <Grid item xs={12} 
            className='preview-container-header' 
            sx={{ 
                backgroundImage: `url(${data.imagens[0] ? URL.createObjectURL(data.imagens[0]) : ''})` 
            }}
        >
            <Typography className='preview-container-header-title'>
                {translate('confirmYourPropertyInformation')}
            </Typography>
            
            <Typography className='preview-container-header-photos'>
                <Image />
                {data.imagens.length}
            </Typography>
        </Grid>

        <Grid item sm={11.6} xs={11.2} className='preview-container-content'>
            <Grid container rowSpacing={DefaultConstants.gridRowSpacing}>
                <Grid item xs={12}>
                    <Typography variant='subtitle1'>{data.titulo}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='preview-container-content-amenities'>
                        {
                            amenities.filter(a => data.comodidades.includes(a.id.toString())).map(a => {
                                return <Grid item className='preview-container-content-amenities-item'>
                                    <img src={a.caminho_imagem} alt={a.descr} className='preview-container-content-amenities-item-image' />
                                    <Typography className='preview-container-content-amenities-item-title'>{a.descr}</Typography>
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography variant='subtitle2' className='preview-container-content-informations'>
                                {data.hospedes} {translate('guests').toLowerCase()}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant='subtitle2' className='preview-container-content-informations'>
                                {data.quartos} {translate('bedrooms').toLowerCase()}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant='subtitle2' className='preview-container-content-informations'>
                                {data.camas} {translate('beds').toLowerCase()}
                            </Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant='subtitle2' className='preview-container-content-informations'>
                                {data.banheiros} {translate('bathrooms').toLowerCase()}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <Typography variant='caption' className='textoverflow-ellipsis overflow-hidden whitespace-nowrap display-block'>{data.endereco}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    {
                        googleMapsApiLoaded && <GoogleMap
                            mapContainerStyle={{
                                height: '100%',
                                minHeight: '300px',
                                width: '100%'
                            }}
                            center={data.coordenadas}
                            zoom={18}
                            options={{
                                fullscreenControl: false,
                                streetViewControl: false
                            }}
                        >
                            <Marker position={data.coordenadas} />
                        </GoogleMap>
                    }
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}

export default Step2_6;