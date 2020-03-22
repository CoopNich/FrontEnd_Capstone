import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import Home from "./home/Home"
import AmpList from "./amps/AmpList";
import AmpForm from "./amps/AmpForm";
import AmpEditForm from "./amps/AmpEditForm";
import GuitarList from "./guitars/GuitarList";
import GuitarForm from "./guitars/GuitarForm";
import GuitarEditForm from "./guitars/GuitarEditForm";

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
            <Route path="/amps/:ampId(\d+)/edit"
                render={props => {
                    if (hasUser) {
                        return <AmpEditForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
            <Route exact path="/guitars"
                render={props => {
                    if (hasUser) {
                        return <GuitarList {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
                    <Route
                path="/guitars/new"
                render={props => {
                    if (hasUser) {
                        return <GuitarForm {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
                      <Route path="/guitars/:guitarId(\d+)/edit"
                render={props => {
                    if (hasUser) {
                        return <GuitarEditForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
        </>


    )
}
export default ApplicationViews;