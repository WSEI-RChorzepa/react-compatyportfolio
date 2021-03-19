import { VoidFunctionComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Auth, Dashboard, Error404 } from "./containers";

const App: VoidFunctionComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Auth</Link>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact>
          <Auth />
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

export default App;
