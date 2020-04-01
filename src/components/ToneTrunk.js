import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./ToneTrunk.css"

const ToneTrunk = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

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
      {hasUser
        ? <NavBar hasUser={hasUser} clearUser={clearUser}/>
        : null }
        <div id="page-wrap">
          <ApplicationViews hasUser={hasUser} setUser={setUser} />
        </div>
      </div>
    </>
  );
};

export default ToneTrunk;