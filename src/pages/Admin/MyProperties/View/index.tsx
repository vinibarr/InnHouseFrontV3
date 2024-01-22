import { Grid, IconButton } from "@mui/material";
import ContentTitle from "../../../../components/Content/ContentTitle";
import { history } from "../../../../router/History";
import { ArrowBack } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { IProperty } from "../../../../interfaces/IProperty";


const ViewProperty = (props: any) => {
    const [property, setProperty] = useState<IProperty | undefined>(undefined);

    useEffect(() => {
        const propertyId = props.match.params.id ?? undefined;
        if (propertyId === undefined) {
            history.goBack();
        }
    }, []);

    if (property === undefined) {
        return <> </>;
    }

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
    </>;
}

export default ViewProperty;