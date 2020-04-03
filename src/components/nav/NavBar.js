import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const NavBar = props => {

    const toDisplay = props.toDisplay

    const handleLogout = () => {
        props.clearUser();
        props.history.push('/login');
    }


    return (
        <Menu>
            {/* <a className="menu-item" href="/Home">Home</a> */}

            {props.hasUser
                ?
                <a className="menu-item" href="/tones" >
                    My Tones
                            </a>

                : null}

            {props.hasUser
                ?
                <a className="menu-item" href="/amps" >
                    Amplifiers
                            </a>

                : null}

            {props.hasUser
                ?
                <a className="menu-item" href="/guitars" >
                    Guitars
                            </a>

                : null}
            {props.hasUser
                ?
                <a className="menu-item" href="/pedals" >
                    Pedals
                            </a>

                : null}

            {props.hasUser
                ?
                <a className="menu-item" href="/login" onClick={handleLogout} >
                    Logout
                             </a>

                :
                null}
        </Menu>
    );
};

export default withRouter(NavBar);