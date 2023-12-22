import './style.scss';
import { Box, Grid } from '@mui/material';

const Content = (props: React.PropsWithChildren) => {
    return <>
        <Box component={Grid} container className='content-admin'>
            {props.children}
        </Box>
    </>;
}

export default Content;