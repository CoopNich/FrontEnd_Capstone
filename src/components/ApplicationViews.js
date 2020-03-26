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
import PedalList from "./pedals/PedalList";
import PedalForm from "./pedals/PedalForm";
import PedalEditForm from "./pedals/PedalEditForm"
import ToneList from "./tones/ToneList"
import ToneDetails from "./tones/ToneDetails"
import ToneForm from "./tones/ToneForm"

const ApplicationViews = props => {
    const hasUser = props.hasUser;
    const setUser = props.setUser;

    return (
        <>
            <Route exact path="/"
                render={props => {
                    if (hasUser) {
                        return <Redirect to="/tones" />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
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
            <Route exact path="/tones"
                render={props => {
                    if (hasUser) {
                        return <ToneList {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
                     <Route exact path="/tones/new"
                render={props => {
                    if (hasUser) {
                        return <ToneForm {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route exact path="/tones/:toneId(\d+)"
                render={props => {
                    if (hasUser) {
                        return <ToneDetails toneId={parseInt(props.match.params.toneId)} {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
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
            <Route exact path="/pedals"
                render={props => {
                    if (hasUser) {
                        return <PedalList {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route
                path="/pedals/new"
                render={props => {
                    if (hasUser) {
                        return <PedalForm {...props} />;
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
            />
            <Route path="/pedals/:pedalId(\d+)/edit"
                render={props => {
                    if (hasUser) {
                        return <PedalEditForm {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }}
            />
        </>


    )
}
export default ApplicationViews;