import { Route, Router, Switch } from "react-router-dom";
import { history } from "../../router/BrowserHistory";
import Login from "./Login";


const LoginRoutes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route component={Login} path='/' />
            </Switch>
        </Router>
    )
}

export default LoginRoutes;