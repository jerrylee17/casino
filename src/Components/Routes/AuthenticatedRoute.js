import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../Navbar/Navbar";

export default function AuthenticatedRoute({
  component: Component,
  appProps,
  ...rest
}) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          appProps.Authenticated ? (
            <NavBar component={Component} {...props} {...appProps} />
          ) : (
            <Redirect to={`/?redirect=signin`} />
          )
        }
      />
    </div>
  );
}
