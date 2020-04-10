import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from "./Pages/Landing/Landing.js";
import Home from "./Pages/Home/Home.js";
import Games from "./Pages/Games/Games.js";
import Profile from "./Pages/Profile/Profile.js";
import Settings from "./Pages/Settings/Settings.js";
import NavBar from "./Components/Navbar/Navbar.js";
import AuthenticatedRoute from "./Components/Routes/AuthenticatedRoute";
import { isAuthenticated } from "./APIFunctions/user";
import { Navbar } from "reactstrap";
const browserHistory = createBrowserHistory();

export default function Routing() {
  const [Authenticating, setIsAuthenticating] = useState(true);
  const [Authenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (isAuthenticated()) {
      userHasAuthenticated(true);
    } else {
      console.log("No current user!");
    }
    setIsAuthenticating(!Authenticating);
  }

  const allRoutes = [
    {
      Component: Home,
      path: "/",
    },
    {
      Component: Games,
      path: "/games",
    },
    {
      Component: Profile,
      path: "/profile",
    },
    {
      Component: Settings,
      path: "/settings",
    },
  ];
  return (
    !Authenticating && (
      <div className="App">
        <Router history={browserHistory}>
          <Switch>
            {/* User does not need to be logged in */}
            {Authenticated ? "" : <Route exact path="/" component={Landing} />}
            {/* User needs to be logged in */}
            {allRoutes.map(({ path, Component }, index) => {
              return (
                <AuthenticatedRoute
                  key={index}
                  exact
                  path={path}
                  component={Component}
                  appProps={{ Authenticated, userHasAuthenticated }}
                />
              );
            })}
          </Switch>
        </Router>
      </div>
    )
  );
}
