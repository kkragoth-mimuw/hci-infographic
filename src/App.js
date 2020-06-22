import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MainSwitch from "./containers/MainSwitch";
import TopMenu from "./containers/TopMenu";

function App(props) {

  return (
      <Router basename={'/directory-name'}>
        <TopMenu />
        <MainSwitch/>
      </Router>
  );
}

export default App;
