import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../constants/routes";
import Loading from "./layout/Loading";
import Navbar from "./layout/Navbar";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} exact path={path}>
            <Suspense fallback={<Loading message="Fetching data..." />}>
              <Component />
            </Suspense>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
