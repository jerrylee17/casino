import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from "./Pages/Landing/Landing.js";
import Home from "./Pages/Home/Home.js";
import Games from "./Pages/Games/Games.js";
import Profile from "./Pages/Profile/Profile.js";
import Shop from "./Pages/Shop/Shop.js";
import Settings from "./Pages/Settings/Settings.js";
import Errors from "./Pages/Error/Errors.js";
import Admin from './Pages/Admin/Admin.js'
import AuthenticatedRoute from "./Components/Routes/AuthenticatedRoute";
import { isAuthenticated } from "./APIFunctions/user";
import BlackJack from './Pages/Games/BlackJack/Blackjack.js'
import SlotsWrapper from './Pages/Games/Slots/slotsWrapper.js'
import Coinflip from './Pages/Games/CoinFlip/coinflip.js'

const browserHistory = createBrowserHistory();

export default function Routing() {
  const [Authenticating, setIsAuthenticating] = useState(true);
  const [Authenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line
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
      Component: Shop,
      path: "/shop",
    },
    {
      Component: Profile,
      path: "/profile",
    },
    {
      Component: Settings,
      path: "/settings",
    },
    {
      Component: Admin,
      path: "/admin"
    },
    {
      Component: BlackJack,
      path: "/blackjack"
    },
    {
      Component: SlotsWrapper,
      path: "/slots"
    },
    {
      Component: Coinflip,
      path: "/coinflip"
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
            <Route path="/*" component={Errors} />
          </Switch>
        </Router>
      </div>
    )
  );
}
