import './style.scss';
import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import Content from '../../components/Content';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import MyProperties from './MyProperties';
import AddEditProperty from './MyProperties/AddEdit';
import { history } from '../../router/BrowserHistory';

const Admin = () => {
    return (
        <>
            <Box component="div" className="grid-admin">
                <AppBar />
                
                <Content>
                    <Router history={history}>
                        <Switch>
                            <Route component={MyProperties} path='/my-properties' exact={true} />
                            <Route component={AddEditProperty} path='/my-properties/add' exact={true} />
                            <Redirect to='/my-properties' />
                        </Switch>
                    </Router>
                </Content>
            </Box>
        </>
    );
}


export default Admin;