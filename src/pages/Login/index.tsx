import './style.scss';
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { history } from "../../router/BrowserHistory";
import Login from "./Login";
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';
import SignUpEmailConfirmation from './SignUpEmailConfirmation';
import ResetPassword from './ResetPassword';


const LoginRoutes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route component={SignUp} path='/sign-up' exact={true} />
                <Route component={SignUpEmailConfirmation} path='/email-confirmation' exact={true} />
                <Route component={ForgotPassword} path='/forgot-password' exact={true} />
                <Route component={ResetPassword} path='/reset-password' exact={true} />
                <Route component={Login} path='/' exact={true} />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default LoginRoutes;