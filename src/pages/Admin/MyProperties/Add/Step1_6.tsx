import { Grid, Typography } from "@mui/material";
import { IPropertyAddEditStepProps } from "../../../../interfaces/IProperty";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import DefaultConstants from "../../../../data/Constants";
import { useState } from "react";
import SelectField from "../../../../components/SelectField";

const defaultNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Step1_6: React.FunctionComponent<IPropertyAddEditStepProps> = ({
    active,
    className
}) => {
    const { translate } = useLanguageContext();

    const [guestsNumber, setGuestsNumber] = useState<number | undefined>(undefined);
    const [bedroomsNumber, setBedroomsNumber] = useState<number | undefined>(undefined);
    const [bedsNumber, setBedsNumber] = useState<number | undefined>(undefined);
    const [bathroomsNumber, setBathroomsNumber] = useState<number | undefined>(undefined);

    return <Grid container className={className} rowSpacing={DefaultConstants.gridRowSpacing}>
        <Grid item xs={12} marginBottom={2}>
            <Typography className='step-content-title'>
                {translate('informationAboutYourProperty')}
            </Typography>
        </Grid>

        <Grid item lg={6} sm={8} xs={12}>
            <Grid container rowSpacing={DefaultConstants.gridRowSpacing} columnSpacing={DefaultConstants.gridColumnSpacing}>
                <Grid item xs={12}>
                    <SelectField
                        label={translate('guests')}
                        name="hospedes"
                        data={defaultNumbers}
                        value={guestsNumber}
                        required={active}
                        type="personalized1"
                        onChange={(e) => setGuestsNumber(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <SelectField
                        label={translate('bedrooms')}
                        name="quartos"
                        data={defaultNumbers}
                        value={bedroomsNumber}
                        required={active}
                        type="personalized1"
                        onChange={(e) => setBedroomsNumber(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <SelectField
                        label={translate('beds')}
                        name="camas"
                        data={defaultNumbers}
                        value={bedsNumber}
                        required={active}
                        type="personalized1"
                        onChange={(e) => setBedsNumber(e.target.value)}
                    />
                </Grid>

                <Grid item xs={12}>
                    <SelectField
                        label={translate('bathrooms')}
                        name="banheiros"
                        data={defaultNumbers}
                        value={bathroomsNumber}
                        required={active}
                        type="personalized1"
                        onChange={(e) => setBathroomsNumber(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
}

export default Step1_6;