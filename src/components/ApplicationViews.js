import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home"

const ApplicationViews = props => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
        <Route
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/Home"
        render={props => {
          return <Home hasUser={hasUser} {...props}/>;
        }}
      />
      </>


    )
}
export default ApplicationViews;