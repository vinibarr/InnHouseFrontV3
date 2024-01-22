import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyType } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import UtilsService from "../../../../services/UtilsService";
import FormHelper from "../../../../helpers/FormHelper";
import FormOption from "../../../../components/FormOption";

const Step1_3: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    className
}) => {
    const { translate } = useLanguageContext();
    
    const [types, setTypes] = useState<IPropertyType[]>([]);
    const [selected, setSelected] = useState<number | undefined>(undefined);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        UtilsService.ListOfTypes(formData).then(resp => {
            setTypes(resp.data as IPropertyType[]);
        }).catch(err => {});
    }, []);

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('whichOptionDescribesYourProperty')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='formoption-container'>
            {
                types.map(t => {
                    return <FormOption 
                        type='radio'
                        title={t.descr}
                        name="tipo"
                        value={t.id}
                        image={t.caminho_imagem}
                        required={active}
                        selected={t.id === selected}
                        onClick={() => setSelected(t.id)}
                    />;
                })
            }
        </Grid>
    </Grid>;
}

export default Step1_3;