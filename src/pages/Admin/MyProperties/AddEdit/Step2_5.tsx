import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyFeature } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import PropertyService from "../../../../services/PropertyService";
import FormHelper from "../../../../helpers/FormHelper";
import useForceRender from "../../../../hooks/useForceRender";

const Step2_5: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();
    const forceRender = useForceRender();
    
    const [features, setFeatures] = useState<IPropertyFeature[]>([]);
    const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        PropertyService.ListOfFeatures(formData).then(resp => {
            setFeatures(resp.data as IPropertyFeature[]);
        }).catch(err => {});
    }, []);


    const handleChangeSelected = useCallback((featureId: number) => {
        let aux = selected;

        if (aux.includes(featureId)) {
            aux = aux.filter(x => x !== featureId);
        } else {
            aux.push(featureId);
        }

        setSelected(aux);
        forceRender();

        // eslint-disable-next-line
    }, [selected]);

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('giveYourPropertyCharacter')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='option-list'>
            {
                features.map(f => {
                    const checked = selected.includes(f.id);
                    const className = checked ? 'active' : '';

                    return <Grid item key={f.id} className={`option-item ${className}`} onClick={() => handleChangeSelected(f.id)}>
                        <img src={f.caminho_imagem} alt={f.descr} className='option-item-image' />
                        <Typography className='option-item-title'>{f.descr}</Typography>
                        <input type="checkbox" name={`caracteristica[${f.id}]`} className='option-item-input' value={f.id} checked={checked} />
                    </Grid>;
                })
            }
        </Grid>
    </Grid>;
}

export default Step2_5;