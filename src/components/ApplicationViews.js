import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home"
import AmpList from "./amps/AmpList";
import AmpForm from "./amps/AmpForm";

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
                    return <Home hasUser={hasUser} {...props} />;
                }}
            />
            <Route exact path="/amps"
                render={props => {
                    if (hasUser) {
                        return <AmpList {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route
                path="/amps/new"
                render={props => {
                    if (hasUser) {
                        return <AmpForm {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
        </>


    )
}
export default ApplicationViews;