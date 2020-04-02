import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./ToneTrunk.css"

const ToneTrunk = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const [toDisplay, setToDisplay] = useState(true)

 const display = () => {
   setToDisplay(true)
 };

 const removeDisplay = () => {
  setToDisplay(false)
 }
 
 
 
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }

  return (
    <>
      <div id="App">
      {hasUser && toDisplay === true
        ? <NavBar hasUser={hasUser} clearUser={clearUser} removeDisplay={removeDisplay} toDisplay={toDisplay}/>
        : null }
        <div id="page-wrap">
          <ApplicationViews hasUser={hasUser} setUser={setUser} removeDisplay={removeDisplay} toDisplay={toDisplay} display={display} />
        </div>
      </div>
    </>
  );
};

export default ToneTrunk;