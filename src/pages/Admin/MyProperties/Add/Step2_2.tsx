import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyAmenity } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import FormHelper from "../../../../helpers/FormHelper";
import useForceRender from "../../../../hooks/useForceRender";
import FormOption from "../../../../components/FormOption";

const Step2_2: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();
    const forceRender = useForceRender();
    
    const [amenities, setAmenities] = useState<IPropertyAmenity[]>([]);
    const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        UtilsService.ListOfAmenities(formData).then(resp => {
            setAmenities(resp.data as IPropertyAmenity[]);
        }).catch(err => {});
    }, []);


    const handleChangeSelected = useCallback((amenityId: number) => {
        let aux = selected;

        if (aux.includes(amenityId)) {
            aux = aux.filter(x => x !== amenityId);
        } else {
            aux.push(amenityId);
        }

        setSelected(aux);
        forceRender();

        // eslint-disable-next-line
    }, [selected]);

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('whatAmenitiesDoesYourPropertyOffer')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='formoption-container'>
            {
                amenities.map(a => {
                    return <FormOption 
                        type='checkbox'
                        title={a.descr}
                        name={`comodidade[${a.id}]`}
                        value={a.id}
                        image={a.caminho_imagem}
                        selected={selected.includes(a.id)}
                        onClick={() => handleChangeSelected(a.id)}
                        key={a.id}
                    />;
                })
            }
        </Grid>
    </Grid>;
}

export default Step2_2;