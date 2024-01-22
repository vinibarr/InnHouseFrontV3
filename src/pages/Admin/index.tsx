import './style.scss';
import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import Content from '../../components/Content';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import MyProperties from './MyProperties';
import AddProperty from './MyProperties/Add';
import { history } from '../../router/History';
import ViewProperty from './MyProperties/View';

const Admin = () => {
    return (
        <>
            <Box component="div" className="grid-admin">
                <AppBar />
                
                <Content>
                    <Router history={history}>
                        <Switch>
                            <Route component={MyProperties} path='/my-properties' exact={true} />
                            <Route component={AddProperty} path='/my-properties/add' exact={true} />
                            <Route component={ViewProperty} path='/my-properties/:id' exact={true} />
                            <Redirect to='/my-properties' />
                        </Switch>
                    </Router>
                </Content>
            </Box>
        </>
    );
}


export default Admin;