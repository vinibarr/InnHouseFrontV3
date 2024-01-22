import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import { DescriptionOutlined } from "@mui/icons-material";

const Step4_1: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    className
}) => {
    const { translate } = useLanguageContext();

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('step')} 4
            </Typography>
        </Grid>

        <Grid item xs={12} className='steps-list'>
            <Grid item lg={6} md={8} sm={12} xs={12} className='step-item'>
                <Typography className='step-item-title'>
                    4. {translate('sendingDocuments')}
                </Typography>
                <DescriptionOutlined className='step-item-icon' />
            </Grid>

            <Grid item xs={12} paddingX={2} paddingY={4}>
                <Typography variant='body1' component='p' className='scalein-animation' marginBottom={2}>
                    Lorem ipsum a rhoncus integer nunc nostra dui erat ligula, sit fermentum elit sed aenean per quisque nunc, ante vitae etiam sem urna orci lobortis auctor. phasellus eget elementum netus elit dui fringilla tempor mi, dui etiam sollicitudin nam purus nostra. augue platea praesent ligula vel tempus dolor, odio nunc fusce accumsan pellentesque, nisi orci sed tortor ut. at dictumst tempus augue nam ultrices donec gravida taciti justo porta, consequat nibh mi est interdum scelerisque ultrices iaculis felis, enim adipiscing malesuada vel himenaeos suscipit quisque mattis vitae. rutrum tempor quis conubia maecenas ullamcorper potenti cras vehicula turpis, leo donec class ut aliquam cursus urna hendrerit. 
                </Typography>

                <Typography variant='body1' component='p' className='scalein-animation' marginBottom={2}>
                    Semper porta congue lacinia luctus dictumst tellus vulputate cras leo himenaeos, rutrum vivamus iaculis netus nostra eleifend enim ac arcu donec, elit sollicitudin nam leo amet justo enim diam venenatis. platea neque maecenas porta nam orci sit, felis porttitor suscipit semper quam aliquam, sagittis arcu etiam non eros. quam augue non quisque erat gravida lacus placerat fames purus facilisis primis consequat odio, vel egestas sem urna dolor etiam egestas pellentesque non praesent at vel. orci maecenas egestas vivamus mi condimentum tellus iaculis eu pellentesque, lacinia orci class interdum quisque pharetra fermentum fames curabitur varius, iaculis litora faucibus condimentum purus cursus mi rutrum. 
                </Typography>

                <Typography variant='body1' component='p' className='scalein-animation' marginBottom={2}>
                    Augue egestas praesent feugiat primis eu at hendrerit imperdiet, ligula quis potenti non molestie nibh nisl ultricies, lobortis vulputate pulvinar nullam sed fermentum ullamcorper. tempus nunc mollis enim a viverra taciti erat lacinia molestie, rhoncus quisque laoreet convallis senectus curae eu amet lacus vulputate, eu facilisis augue quisque lorem eu egestas platea. aptent ac lobortis sociosqu consequat etiam sodales libero quisque ut platea tempor ac, dui ornare nisl laoreet platea tellus auctor inceptos quam turpis nisl. feugiat fringilla varius placerat nulla morbi non quam, massa tempor sem blandit taciti sem, hac donec egestas rutrum nibh est. 
                </Typography>
                
                <Typography variant='body1' component='p' className='scalein-animation' marginBottom={2}>
                    Enim aliquam lectus inceptos ligula eros nec habitant, rutrum ultricies justo sollicitudin eros nostra. dolor cras commodo imperdiet fermentum enim fringilla duis tristique, posuere est leo curae orci quam lobortis interdum, sit aenean aliquam sagittis nam nullam sodales. ut eleifend turpis integer porttitor phasellus inceptos laoreet, ut vel nunc sed aliquet quisque in, aliquam rhoncus nec at torquent bibendum. neque eget aliquam porta hendrerit mauris, sociosqu fusce sodales est, quam convallis sem nunc. ornare eleifend tellus phasellus inceptos egestas ornare neque rutrum, habitasse id enim nulla tellus class nam. massa quisque nostra facilisis eu leo nullam aptent, litora lacinia magna varius urna diam ad erat, nostra auctor libero lobortis id habitasse. 

                </Typography>

                <Typography variant='body1' component='p' className='scalein-animation'>
                    Auctor vitae venenatis purus proin enim dui ad id maecenas sit, viverra lorem primis class congue ut odio fusce bibendum nulla, eget ultrices sollicitudin per vitae sem enim rutrum donec. elit volutpat orci dictumst laoreet torquent ipsum mollis, odio mi nunc lectus mollis donec tristique, iaculis nullam cras eu hendrerit fringilla. maecenas convallis lobortis ante vivamus risus varius, convallis facilisis nullam eget vitae quam consequat, ultrices quisque sociosqu donec urna. aliquam nullam cubilia hendrerit et libero, commodo eu lorem praesent tempus eget, quis ultricies convallis interdum. 
                </Typography>
            </Grid>
        </Grid>
    </Grid>;
}

export default Step4_1;