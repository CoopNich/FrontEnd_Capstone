import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ToneTrunk from "./components/ToneTrunk";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <ToneTrunk />
  </Router>,
  document.getElementById("root")
);
