import './style.scss';
import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';

const Admin = () => {
    return (
        <>
            <Box component="div" className="grid-admin">
                <AppBar />
            </Box>
        </>
    );
}


export default Admin;