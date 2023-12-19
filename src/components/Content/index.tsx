import './style.scss';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { history } from '../../router/BrowserHistory';
import { Box, Grid } from '@mui/material';
import MyProperties from '../../pages/Admin/MyProperties';
import AddEditProperty from '../../pages/Admin/MyProperties/AddEdit';

const Content = () => {
    return <>
        <Box component={Grid} container className='content-admin'>
            <Router history={history}>
                <Switch>
                    <Route component={MyProperties} path='/my-properties' exact={true} />
                    <Route component={AddEditProperty} path='/my-properties/add' exact={true} />
                    <Route component={AddEditProperty} path='/my-properties/edit/{id}' exact={true} />
                    <Redirect to='/my-properties' />
                </Switch>
            </Router>
        </Box>
    </>;
}

export default Content;