import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { DescriptionOutlined, Image, KingBed, Send, Verified } from "@mui/icons-material";
import DefaultConstants from "../../../../data/Constants";

const Step1_1: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('quickAndSimple')}
            </Typography>
        </Grid>

        <Grid item xs={12} className='steps-list'>
            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    1. {translate('describeYourProperty')}
                </Typography>
                <KingBed className='step-item-icon' />
            </Grid>

            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    2. {translate('addPhotosAndInformation')}
                </Typography>
                <Image className='step-item-icon' />
            </Grid>

            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    3. {translate('approval')}
                </Typography>
                <Verified className='step-item-icon' />
            </Grid>

            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    4. {translate('sendingDocuments')}
                </Typography>
                <DescriptionOutlined className='step-item-icon' />
            </Grid>

            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    5. {translate('publish')}
                </Typography>
                <Send className='step-item-icon' />
            </Grid>
        </Grid>
    </Grid>;
}

export default Step1_1;