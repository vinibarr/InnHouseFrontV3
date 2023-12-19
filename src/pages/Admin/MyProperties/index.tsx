import { Grid, IconButton } from "@mui/material";
import ContentTitle from "../../../components/Content/ContentTitle";
import DefaultConstants from "../../../data/Constants";
import Tooltip from "../../../components/Tooltip";
import { Add } from "@mui/icons-material";
import { useLanguageContext } from "../../../contexts/LanguageContext";
import PropertyCard from "../../../components/PropertyCard";
import { history } from "../../../router/BrowserHistory";

const MyProperties = () => {
    const { translate } = useLanguageContext();

    return <>
        <Grid item xs={12} className='grid-header'>
            <Grid item className='grid-title'>
                <ContentTitle 
                    name='myProperties'
                />
            </Grid>
                
            <Grid item className='grid-tools'>
                <Tooltip title={translate('add')}>
                    <IconButton onClick={() => history.push('/my-properties/add')}>
                        <Add />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>

        <Grid container 
            className='grid-content overflow-enabled justifycontent-flexstart aligncontent-flexstart' 
            rowSpacing={DefaultConstants.gridRowSpacing * 2} 
            columnSpacing={DefaultConstants.gridColumnSpacing * 2}
        >
            {
                [
                    'https://conteudo.imguol.com.br/c/entretenimento/21/2021/01/13/the-one-e-anunciada-como-a-maior-mansao-do-mundo-e-podera-ser-a-mais-cara-ja-vendida-na-america-1610544079895_v2_4x3.jpg',
                    'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2022/02/Mansao-de-Alto-Luxo-frente-mar-a-venda-em-Interlagos-Bahia-1.jpg',
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/07/mansao-de-luxo-com-piscina-e-area-gourmet-homify.jpg',
                    'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2023/06/Mansao-dupla-de-frente-para-o-mar-em-Guarajuba-50-1240x719.jpeg',
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/07/mansao-de-luxo-com-piscina-e-area-gourmet-homify.jpg',
                    'https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2023/06/Mansao-dupla-de-frente-para-o-mar-em-Guarajuba-50-1240x719.jpeg'
                ].map((url, index) => {
                    return <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                        <PropertyCard
                            image={url}
                            title={`Minha propriedade ${index}`}
                        />
                    </Grid>
                })
            }
        </Grid>
    </>;
}


export default MyProperties;