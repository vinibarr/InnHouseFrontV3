import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";

const Step1_5: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('isTheMapCorrect')}
            </Typography>
        </Grid>

        <Grid item lg={6} xs={12}>
            mapa
        </Grid>
    </Grid>;
}

export default Step1_5;