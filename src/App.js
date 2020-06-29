import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Main from "./containers/Main";

function App(props) {

  return (
      <Router basename="hci-infographic">
        <Main/>
      </Router>
  );
}

export default App;
