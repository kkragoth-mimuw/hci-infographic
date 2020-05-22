import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import MainSwitch from "./containers/MainSwitch";

function App(props) {

  return (
    <div className="App">
      <Router basename={'/directory-name'}>
        <MainSwitch/>
      </Router>
    </div>
  );
}

export default App;
