import { Grid } from "@mui/material";
import ContentTitle from "../../../../components/Content/ContentTitle";

const AddEditProperty = () => {
    return <>
        <Grid item xs={12} className='grid-header'>
            <Grid item className='grid-title'>
                <ContentTitle 
                    name='add'
                />
            </Grid>
        </Grid>

        <Grid container>
            em construção...
        </Grid>
    </>;
}


export default AddEditProperty;