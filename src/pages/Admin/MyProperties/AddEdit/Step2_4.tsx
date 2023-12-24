import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import TextField from "../../../../components/TextField";

const Step2_4: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    className
}) => {
    const { translate } = useLanguageContext();

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('giveYourPropertyTitleAndDescription')}
            </Typography>
        </Grid>

        <Grid item lg={6} xs={12}>
            <Grid xs={12}>
                <TextField
                    label={translate('title')}
                    name="titulo"
                    variant="outlined"
                    required={active}
                    multiline={true}
                    minRows={4}
                    maxRows={4}
                    className='scalein-animation'
                />
            </Grid>

            <Grid xs={12}>
                <TextField
                    label={translate('description')}
                    name="descricao"
                    variant="outlined"
                    required={active}
                    multiline={true}
                    minRows={12}
                    maxRows={12}
                    className='scalein-animation'
                />
            </Grid>
        </Grid>
    </Grid>;
}

export default Step2_4;