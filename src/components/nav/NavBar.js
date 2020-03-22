import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Navbar, Nav, Jumbotron } from "reactstrap"
import "./NavBar.css"

const NavBar = props => {

    const handleLogout = () => {
        props.clearUser();
        props.history.push('/login');
    }

    return (
        <header>
            <Jumbotron className="site-title">
                <h1>toneTrunk</h1>
            </Jumbotron>
            <Navbar bg="dark" variant="dark" >
                <Nav className="container">

                    {/* <NavLink className="nav-link" to="/Home">Home</NavLink> */}

                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/amps" >
                            Amplifiers
                            </NavLink>

                        : null}

                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/guitars" >
                            Guitars
                            </NavLink>

                        : null}

                    {props.hasUser
                        ?
                        <NavLink className="nav-link" to="/login" onClick={handleLogout} >
                            Logout
                             </NavLink>

                        :
                        null}
                </Nav>
            </Navbar>
        </header>
    );
};

export default withRouter(NavBar);