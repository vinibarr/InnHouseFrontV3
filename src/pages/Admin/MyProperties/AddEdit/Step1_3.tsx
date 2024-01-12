import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps, IPropertyType } from "../../../../interfaces/IProperty";
import DefaultConstants from "../../../../data/Constants";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { useEffect, useState } from "react";
import PropertyService from "../../../../services/PropertyService";
import FormHelper from "../../../../helpers/FormHelper";

const Step1_3: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    className
}) => {
    const { translate } = useLanguageContext();
    
    const [types, setTypes] = useState<IPropertyType[]>([]);
    const [selected, setSelected] = useState<number | undefined>(undefined);

    useEffect(() => {
        const formData = FormHelper.Create(undefined);
        PropertyService.ListOfTypes(formData).then(resp => {
            setTypes(resp.data as IPropertyType[]);
        }).catch(err => {});
    }, []);

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('whichOptionDescribesYourProperty')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='option-list'>
            {
                types.map(t => {
                    const checked = t.id === selected;
                    const className = checked ? 'active' : '';

                    return <Grid item key={t.id} className={`option-item ${className}`} onClick={() => setSelected(t.id)}>
                        <img src={t.caminho_imagem} alt={t.descr} className='option-item-image' />
                        <Typography className='option-item-title'>{t.descr}</Typography>
                        <input type="radio" name="tipo" className='option-item-input' value={t.id} checked={checked} required={active} />
                    </Grid>;
                })
            }
        </Grid>
    </Grid>;
}

export default Step1_3;