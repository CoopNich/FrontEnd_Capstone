import React, { useState, useEffect } from "react";
import UserManager from "../../modules/UserManager"
// import "./Home.css"



const Home = (props) => {

  const [user, setUser] = useState({ username: "" });

  const getCurrentUser = () => {
    return UserManager.getCurrentUser().then(user => {
      setUser(user)
    });
  };


  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
   <>
    {
      (props.hasUser)
        ? <h1 className="welcome">Welcome, {user.username}!</h1>     
        : null
    }
    </>
  );
};

export default Home;