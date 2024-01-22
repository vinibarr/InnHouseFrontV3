import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyFeature } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useCallback, useEffect, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import FormHelper from "../../../../helpers/FormHelper";
import useForceRender from "../../../../hooks/useForceRender";
import FormOption from "../../../../components/FormOption";

const Step2_5: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();
    const forceRender = useForceRender();
    
    const [features, setFeatures] = useState<IPropertyFeature[]>([]);
    const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        UtilsService.ListOfFeatures(formData).then(resp => {
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

        <Grid item xs={12} className='formoption-container'>
            {
                features.map(f => {
                    return <FormOption 
                        type='checkbox'
                        title={f.descr}
                        name={`caracteristica[${f.id}]`}
                        value={f.id}
                        image={f.caminho_imagem}
                        selected={selected.includes(f.id)}
                        onClick={() => handleChangeSelected(f.id)}
                        key={f.id}
                    />;
                })
            }
        </Grid>
    </Grid>;
}

export default Step2_5;