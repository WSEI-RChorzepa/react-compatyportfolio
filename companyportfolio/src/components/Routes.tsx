import { VoidFunctionComponent } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard, Error404 } from 'containers';

const Router: VoidFunctionComponent = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Dashboard />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
