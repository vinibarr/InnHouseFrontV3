import { Box, Grid, IconButton, Typography } from "@mui/material";
import ContentTitle from "../../../components/Content/ContentTitle";
import DefaultConstants from "../../../data/Constants";
import Tooltip from "../../../components/Tooltip";
import { Add } from "@mui/icons-material";
import { useLanguageContext } from "../../../contexts/LanguageContext";
import PropertyCard from "../../../components/PropertyCard";
import { history } from "../../../router/BrowserHistory";
import { useEffect, useState } from "react";
import { IProperty } from "../../../interfaces/IProperty";
import FormHelper from "../../../helpers/FormHelper";
import PropertyService from "../../../services/PropertyService";

const MyProperties = () => {
    const { translate } = useLanguageContext();

    const [properties, setProperties] = useState<IProperty[]>([]);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        PropertyService.List(formData).then(resp => {
            setProperties(resp.data as IProperty[]);
        }).catch(err => {});
    }, []);

    return <>
        <Grid item xs={12} className='grid-header'>
            <Grid item className='grid-title'>
                <ContentTitle 
                    name='myProperties'
                />
            </Grid>
                
            <Grid item className='grid-tools'>
                {
                    properties.length > 0 && <Tooltip title={translate('addProperty')}>
                        <IconButton onClick={() => history.push('/my-properties/add')}>
                            <Add />
                        </IconButton>
                    </Tooltip>
                }
            </Grid>
        </Grid>

        <Grid container 
            className='grid-content overflow-enabled justifycontent-flexstart aligncontent-flexstart' 
            rowSpacing={DefaultConstants.gridRowSpacing * 2} 
            columnSpacing={DefaultConstants.gridColumnSpacing * 2}
        >
            {
                properties.length === 0 ? <>
                    <Grid item xs={12} className='display-flex height-100pc flexdirection-column justifycontent-center textalign-center'>
                        <Box>
                            <IconButton className='color-primary' onClick={() => history.push('/my-properties/add')}>
                                <Add className='fontsize-80' />
                            </IconButton>
                        </Box>

                        <Typography variant='body1' className='fontsize-24' marginTop={0.8}>
                            {translate('addProperty')}
                        </Typography>
                    </Grid>
                </> : <>
                    {
                        properties.map(p => {
                            const image = p.fotos.length > 0 ? p.fotos[0].nome_servidor : '';
        
                            return <Grid item lg={3} md={4} sm={6} xs={12} key={p.id}>
                                <PropertyCard
                                    image={image}
                                    title={p.descricao}
                                />
                            </Grid>
                        })
                    }
                </>
            }
        </Grid>
    </>;
}


export default MyProperties;