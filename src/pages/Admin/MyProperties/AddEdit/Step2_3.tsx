import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";

const Step2_3: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('addPhotosOfYourProperty')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='steps-list'>
            pending
        </Grid>
    </Grid>;
}

export default Step2_3;