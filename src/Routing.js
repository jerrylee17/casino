import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.js";
import Home from "./Pages/Home/Home.js";
import Games from "./Pages/Games/Games.js";
import Profile from "./Pages/Profile/Profile.js";
import Settings from "./Pages/Settings/Settings.js";
import NavBar from "./Components/Navbar/Navbar.js";

export default function Routing() {
  const allRoutes = [
    {
      Component: Home,
      path: "/"
    },
    {
      Component: Games,
      path: "/games"
    },
    {
      Component: Profile,
      path: "/profile"
    },
    {
      Component: Settings,
      path: "/settings"
    }
  ];
  return (
    <Router>
      <Route
        exact
        path="/landing" // Temporary path, need to implement Auth/Nonauth routes
        component={Landing}
      />
      {allRoutes.map(({ path, Component }, index) => {
        return (
          <Route
            key={index}
            exact
            path={path}
            render={props => <NavBar component={Component} {...props} />}
          />
        );
      })}
    </Router>
  );
}
