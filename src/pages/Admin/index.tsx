import './style.scss';
import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import Content from '../../components/Content';

const Admin = () => {
    return (
        <>
            <Box component="div" className="grid-admin">
                <AppBar />
                <Content />
            </Box>
        </>
    );
}


export default Admin;