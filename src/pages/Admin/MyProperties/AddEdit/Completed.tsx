import { Grid, Typography } from "@mui/material";
import { useLanguageContext } from "../../../../contexts/LanguageContext";
import { Check } from "@mui/icons-material";
import { ActionButton } from "../../../../components/Button";
import { history } from "../../../../router/BrowserHistory";

const Completed = () => {
    const { translate } = useLanguageContext();

    return <Grid item xs={12} className='completed-container'>
        <Check className='completed-container-icon' />

        <Typography className='completed-container-title'>
            {translate('thanks')}
        </Typography>

        <Typography className='completed-container-subtitle'>
            {translate('yourRegistrationHasBeenCompleted')}
        </Typography>

        <Typography className='completed-container-description'>
            Lorem ipsum a rhoncus integer nunc nostra dui erat ligula, sit fermentum elit sed aenean per quisque nunc, ante vitae etiam sem urna orci lobortis auctor. phasellus eget elementum netus elit dui fringilla tempor mi, dui etiam sollicitudin nam purus nostra.  
        </Typography>

        <ActionButton
            action="back"
            onClick={() => history.goBack()}
            className="scalein-animation text-alwaysshow"
        />
    </Grid>;
}

export default Completed;