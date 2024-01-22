import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyAmenity } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import FormHelper from "../../../../helpers/FormHelper";
import useForceRender from "../../../../hooks/useForceRender";

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

        <Grid item xs={12} className='option-list'>
            {
                amenities.map(a => {
                    const checked = selected.includes(a.id);
                    const className = checked ? 'active' : '';

                    return <Grid item key={a.id} className={`option-item ${className}`} onClick={() => handleChangeSelected(a.id)}>
                        <img src={a.caminho_imagem} alt={a.descr} className='option-item-image' />
                        <Typography className='option-item-title'>{a.descr}</Typography>
                        <input type="checkbox" name={`comodidade[${a.id}]`} className='option-item-input' value={a.id} checked={checked} />
                    </Grid>;
                })
            }
        </Grid>
    </Grid>;
}

export default Step2_2;